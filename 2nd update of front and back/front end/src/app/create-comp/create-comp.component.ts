import { Component, OnInit,Input,OnChanges,SimpleChange } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-create-comp',
  templateUrl: './create-comp.component.html',
  styleUrls: ['./create-comp.component.css']
})
export class CreateCompComponent implements OnInit {

	form;

  constructor(private blogservice:BlogService){}

  ngOnInit() {
  	this.form= new FormGroup({
  	blog_title:new FormControl(""),
  	blog_author:new FormControl(""),
  	blog_content:new FormControl("")

  	})

  	
  }
  onSubmit = function(form){
  	console.log(form);
  	this.blogservice.savePost(form);
  	}

}
