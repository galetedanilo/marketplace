import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { IPublicHttpClientService } from 'src/app/core/interfaces/public-http-client-service.interface';
import { PublicHttpClientService } from 'src/app/core/services/public-http-client.service';

import { ContactFormComponent } from './components/contact_form/contatct-form.component';
import { IContactFormService } from './components/contact_form/interfaces/contact-form-service.interface';
import { ContactFormService } from './components/contact_form/services/contact-form.service';
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
    { provide: IPublicHttpClientService, useClass: PublicHttpClientService },
    { provide: IContactFormService, useClass: ContactFormService }
  ],
})
export class FooterModule {}
