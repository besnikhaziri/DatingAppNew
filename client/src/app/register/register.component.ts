import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';

import { AccountService } from '../_services/account.service';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
    }, error =>{
      console.log(error);
    })
    this.cancelRegisterMode();
  }

  cancelRegisterMode(){
    this.cancelRegister.emit(false);
  }

}