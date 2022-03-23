import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private hc:HttpClient) { }

  getUser(id: number){
    return this.hc.get('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}
