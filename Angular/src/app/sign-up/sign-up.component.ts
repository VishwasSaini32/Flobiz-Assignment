import { Component, OnInit, NgZone } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(public router:Router,  public data:ApiService, public ngZone:NgZone)
  {

  }
  submitted = false;
  signUpForm: FormGroup;

  user:{
    email:string,
    pass:string,
    bio:string,
    gender:string,
    age:number,
    first_name:string,
    last_name:string
  };

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'pass': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]),
      'bio': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'first_name': new FormControl(null, [Validators.required]),
      'last_name': new FormControl(null, [Validators.required])
    });
  }
  
   get myForm(){
    return this.signUpForm.controls;
  }

  register() {
    this.submitted = true;
    if (!this.signUpForm.valid) {
      return false;
    } else {
      this.data.createUsers(this.signUpForm.value).subscribe(
        (res) => {
          console.log('User successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
