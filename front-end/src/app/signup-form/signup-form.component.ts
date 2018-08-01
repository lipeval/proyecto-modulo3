import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  
  email: string = ''
  password: string = ''
  auth: any = {
    email: '',
    password: ''
  } //object used for all authentication
  user = ''

  constructor(private authService: AuthService) { }

  cardsForm(form){
    console.log(form.value)
  }


  ngOnInit() {
  }

  useSignup(){
    this.auth.email = this.email;
    this.auth.password = this.password;
    this.authService.signup(this.auth)
    .subscribe( user => this.user = user)
    console.log(this.user)
    this.email = '';
    this.password = '';

  }}
