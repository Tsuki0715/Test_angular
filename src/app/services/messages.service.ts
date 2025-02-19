import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/posts.interface';
import { Product } from '../interfaces/data.interface';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getMessages() {
    return ['message 1', 'message 2', 'message 3'];
  }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getProducts() : Observable<Product> {
    return this.http.get<Product>('http://localhost:1200/products');
  }
}
