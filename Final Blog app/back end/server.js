'use strict';
const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000,
	routes: {
           cors: true
       }
});

//To list blogs of an author 
server.route({
    method: 'GET',
    path: '/blogs/list',
    handler: function (request,reply) {
		
	connection.query('select * from blogs', function(err, blogs, fields) {
	if (err) throw err;
	reply(blogs);
   
	});
	}
});
	

//To insert a blog
server.route({
    method: 'POST',
    path: '/blogs/insert',
    handler: function (request, reply) {
		console.log(request.payload);
	var insertQuery = 'INSERT INTO `blogs`( `title`, `content`, `author_name`, `upvote`, `downvote`) VALUES ("'+ request.payload.blog_title +'","'+ request.payload.blog_content+'","'+ request.payload.blog_author+ '",' + request.payload.upvote+',' + request.payload.downvote+')';
	connection.query(insertQuery,
       function (error, results, fields) {
       if (error) throw error;
	   reply("Blog inserted into DB");
    });
  }
});

//To get comments for a blog
server.route({
    method: 'GET',
    path: '/blogs/comments',
    handler: function (request, reply) {
	connection.query('SELECT * from comments where blogid = '+ request.query.blogid,
       function (error, comments, fields) {
       if (error) throw error;
	   reply(comments);
    });
  }
});

//To insert a blog comment
server.route({
    method: 'POST',
    path: '/blogs/comment',
    handler: function (request, reply) {
	connection.query('INSERT INTO `comments` (`comment`, `comment_author`, `blogid`) VALUES ("'+ request.payload.comment +'","'+ request.payload.comment_author+ '","' + request.payload.blogid +'")',
       function (error, results, fields) {
       if (error) throw error;
	   reply("Blog comment inserted into DB");
    });
  }
});

//To upvote
server.route({
    method: 'GET',
    path: '/blogs/upvote',
    handler: function (request, reply) {
	connection.query('UPDATE `blogs` SET `upvote`= `upvote` + 1 WHERE `ID` = '+ request.query.blogid,
       function (error, results, fields) {
       if (error) throw error;
	   reply("Blog upvoted");
    });
  }
});

//To downvote
server.route({
    method: 'GET',
    path: '/blogs/downvote',
    handler: function (request, reply) {
	connection.query('UPDATE `blogs` SET `downvote`= `downvote` + 1 WHERE `ID` = '+ request.query.blogid,
       function (error, results, fields) {
       if (error) throw error;
	   reply("Blog downvoted");
    });
  }
});


server.start((err) => {
   if (err) {
	 console.log(err);
     throw err;
   }
  console.log('Server running at:', server.info.uri);
});

const MySQL = require('mysql');

const connection = MySQL.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'blogsdb'
});


connection.connect();