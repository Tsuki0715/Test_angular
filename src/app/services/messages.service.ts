import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() { }

  getMessages() {
    return ['message 1', 'message 2', 'message 3'];
  }
}
