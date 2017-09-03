import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(private http:Http) { }

  fetchData(){
  	return this.http.get('http://localhost:8000/blogs/list').map((res:Response)=>res.json());
  	
  }

  upvote(c){
  	return this.http.get('http://localhost:8000/blogs/upvote?blogid='+c);
  	
  	
  }

  downvote(c){
   return this.http.get('http://localhost:8000/blogs/downvote?blogid='+c);
  	
  	
  }

savePost(data){
	const headers = new HttpHeaders()
.set("Content-Type", "application/json");
	data.upvote=0;
	data.downvote=0;
  	this.http.post('http://localhost:8000/blogs/insert',data).subscribe();
  	
  }
  
}
