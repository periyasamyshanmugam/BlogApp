import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.css']
})
export class ViewCompComponent implements OnInit {
	
blogs={
	
};
  constructor(private blogservice:BlogService){}

  ngOnInit() {
  		this.blogservice.fetchData().subscribe(data=>this.blogs=data);
  }

  upvote(){
  	this.blogservice.upvote(1).subscribe();
  }

  downvote(){
  	this.blogservice.downvote(1).subscribe();
  }

}
