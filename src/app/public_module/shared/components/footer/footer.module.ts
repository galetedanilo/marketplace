import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicHttpClient } from '@app/core/classes/public-http-client.class';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { PublicHttpClientService } from 'src/app/core/services/public-http-client.service';

import { ContactMessage } from './components/contact_form/classes/contact-message.class';
import { ContactFormComponent } from './components/contact_form/contact-form.component';
import { ContactMessageService } from './components/contact_form/services/contact-message.service';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent, ContactFormComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FooterComponent],
  providers: [
    { provide: PublicHttpClient, useClass: PublicHttpClientService },
    { provide: ContactMessage, useClass: ContactMessageService }
  ],
})
export class FooterModule {}
