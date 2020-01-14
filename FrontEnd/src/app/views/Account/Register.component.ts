import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component
  ({
    template: '<Register></Register>',
  templateUrl: './Register.component.html'
  })
export class RegisterComponent {

  form:any
  email:string
  password:string

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.form=fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
   }


  register()
  {
    console.log(this.form);
  }


}
