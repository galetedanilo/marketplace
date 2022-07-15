import { Component, OnInit, SkipSelf } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    userpassword: new FormControl('', Validators.required)
  })

  ngOnInit(): void {

  }

  onSubmit(): void {
    
  }
}
