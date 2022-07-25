import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ContactMessage } from './classes/contact-message.class';
import { ContactMessageResponse } from './interfaces/contact-message-response.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();

  contactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    content: new FormControl('', Validators.required),
  });

  constructor(private _contactMessageService: ContactMessage) {}

  clearForm(): void {
    this.contactForm.reset();
  }

  onSubmit(): void {
    this._contactMessageService
      .sendContactMessage(this.contactForm.value)
      .subscribe({
        next: (data: ContactMessageResponse) => {
          console.log(data)
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
        complete: () => {
          this.ngOnDestroy();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
