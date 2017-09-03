import { Component } from '@angular/core';
import {BlogService} from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private blogservice:BlogService){}

  ngOnInit(){console.log("Service loaded");
  	//this.blogservice.fetchData();
  }
}
