import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslocoModule } from "@ngneat/transloco";
import { ForgotPasswordRoutingModule } from "./forgot-password-routing.module";
import { ForgotPasswordComponent } from "./forgot-password.component";

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule, ForgotPasswordRoutingModule]
})
export class ForgotPasswordModule {} 
