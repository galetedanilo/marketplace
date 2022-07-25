import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicHttpClient } from '@app/core/classes/public-http-client.class';
import { TranslocoModule } from '@ngneat/transloco';
import { PublicHttpClientService } from 'src/app/core/services/public-http-client.service';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule, TranslocoModule],
  providers: [
    { provide: PublicHttpClient, useClass: PublicHttpClientService },
  ],
})
export class AuthModule {}
