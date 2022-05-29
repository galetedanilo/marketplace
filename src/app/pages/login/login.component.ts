import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm = new FormGroup({
    user_name: new FormControl('', [Validators.email]),
    user_password: new FormControl('', [Validators.required])
  });

  public onFormSubmit(): void {
    
  }
}