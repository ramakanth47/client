import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:3000"
  getTodos(){
  return this.http.get(this.baseUrl+"/todos")
  }
}
