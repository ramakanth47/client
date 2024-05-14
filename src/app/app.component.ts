import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todoapp';
constructor(private  globalService:GlobalService){

}
ngOnInit(): void {
  this.call()
}
call(){
  this.globalService.getTodos().subscribe((data)=>{
    console.log("api data",data)
  },(err)=>{
    console.log(err)
  })
}
}


