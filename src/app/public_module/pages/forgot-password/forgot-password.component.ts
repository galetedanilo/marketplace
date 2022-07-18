import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TRANSLOCO_SCOPE } from "@ngneat/transloco";

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [{provide: TRANSLOCO_SCOPE, useValue: 'forgot'}]
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotForm: FormGroup = new FormGroup({
    user_email: new FormControl('', [Validators.required, Validators.email])
  })

  ngOnInit(): void {

  }

  onSubmit(): void {
    
  }
}
