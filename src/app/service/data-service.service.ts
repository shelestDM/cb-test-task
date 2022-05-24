import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo, Post } from '../shared/interface/index';
import { Observable, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  posts: Post[] = [];
  photo: Photo[] = [];
  key1: boolean = false;
  key2: boolean = false;
  searchStr: any = ''

  constructor( private http: HttpClient) { }

  onLoadPosts() {
    this.key1 = false;
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=100')
    .subscribe(response => {
      this.posts = response;
      this.key1 = true;
    })
  }
  onLoadPhotos(){
    this.key2 = false;
    this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=100')
    .subscribe(response =>{
      this.photo = response;
      this.key2 = true;
    })
  }
  onLoadData(){
    this.onLoadPhotos();
    this.onLoadPosts();
  }

  getById(id: number) {
    return this.posts.find( p => p.id === id )
  }

}
