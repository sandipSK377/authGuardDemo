import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb: FormBuilder,private route:Router,private service:AuthService) { }

  ngOnInit() {
    this.loginFormData();
  }
  loginFormData(){
    this.loginForm= this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(){
    var data=this.loginForm.value;
    console.log("form data",data);
    if(data){
      var val=this.service.isLogedIn(data.email,data.password);
      if(val){
        this.route.navigate(['/admin']);
      }
    }
  }

}
