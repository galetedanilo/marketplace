import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';


@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'auth'}]
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    user_email: new FormControl('', [Validators.required, Validators.email]),
    user_password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {

  }

  onSubmit(): void {
    
  }
}
