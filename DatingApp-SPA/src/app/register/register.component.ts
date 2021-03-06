import { AuthService } from './../_services/auth.service';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
model:any = {};
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.model).subscribe(() =>
    {
      console.log('registration successful');
    }, error =>{
      console.log(error);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }
}
