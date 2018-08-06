import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  hasAccount: boolean = true
  username: string = ''
  email: string = ''
  password: string = ''
  auth: any = {} 
  user:  any;

  constructor(private authService: AuthService,
  private router: Router) { }


  useSignup(){
    this.auth.email = this.email;
    this.auth.password = this.password;
    this.authService.signup(this.auth)
    .subscribe( user => this.user = user)
    this.email = '';
    this.password = '';

  }

  useLogin(){
    this.authService.login(this.auth)
    .subscribe(user=>{
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['home']);
  })
}

ngOnInit() {
  if(localStorage.getItem('user')){
    this.router.navigate(['home'])
}
}
submitForm(myForm) {
  console.log(myForm);
}
}



