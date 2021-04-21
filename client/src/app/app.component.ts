import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Datina app';
  users: any;

  constructor(private Http: HttpClient){}

  ngOnInit() {
    this.getUsers();
    
  }
getUsers(){
  this.Http.get('https://localhost:5001/api/users').subscribe(repsponse =>{
    this.users = repsponse;
  }, error => {
    console.log(error);
  })
}
  
}
