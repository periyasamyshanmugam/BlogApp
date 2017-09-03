import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.css']
})
export class ViewCompComponent implements OnInit {
	form1;
blogs={
	
};
  constructor(private blogservice:BlogService){}

  ngOnInit() {
  		this.form1= new FormGroup({
  	blog_title:new FormControl(""),
  	blog_author:new FormControl(""),
  	blog_content:new FormControl("")

  	});
  		this.blogservice.fetchData().subscribe(data=>{this.blogs=data});
  }

  onSubmit = function(form1){
  	console.log(form1);
  	this.blogservice.savePost(form1);
  	}

  upvote(){
  	this.blogs[0].upvote++;
  	this.blogservice.upvote(1).subscribe();
  }

  downvote(){
  	this.blogs[0].downvote++;
  	this.blogservice.downvote(1).subscribe();
  }

}
