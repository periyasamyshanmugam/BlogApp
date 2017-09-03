'use strict';
const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/welcome',
    handler: function (request, reply) {
    return reply('hello world');
}
});

server.start((err) => {
   if (err) {
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

// Get users list
server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
       connection.query('SELECT * from blogs',
       function (error, results, fields) {
       if (error) throw error;

       reply(results);
    });
  }
});