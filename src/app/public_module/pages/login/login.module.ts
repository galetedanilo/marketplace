import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IPublicHttpClientService } from 'src/app/core/interfaces/public-http-client-service.interface';
import { PublicHttpClientService } from 'src/app/core/services/public-http-client.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [
    { provide: IPublicHttpClientService, useClass: PublicHttpClientService },
  ],
})
export class LoginModule {}
