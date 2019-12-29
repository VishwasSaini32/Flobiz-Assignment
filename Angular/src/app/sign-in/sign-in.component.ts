import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    userData:any;
    loginForm:FormGroup;
  constructor(private router:Router, public data: ApiService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'pass': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]),
    });
  }

  login()
      {
        this.data.getUser(this.loginForm.value.email).subscribe(
          result =>{
            this.userData = result;
            console.log(result);
            this.loginCheck();
          },
          error=>{
          console.error();
          }
        );
      }
    
      loginCheck()
      {
        if(this.loginForm.value.email == this.userData.email && this.loginForm.value.pass == this.userData.password)
        {
          this.router.navigate(['/home']);
        }
    
        else
          alert("Fail");
      }

}
