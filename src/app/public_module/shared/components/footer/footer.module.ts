import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { ContactFormComponent } from './components/contact_form/contatct-form.component';
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
})
export class FooterModule {}
