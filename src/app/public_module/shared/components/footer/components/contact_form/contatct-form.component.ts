import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IContactFormService } from './interfaces/contact-form-service.interface';
import { ContactResponse } from './interfaces/contatc-response.interface';

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

  constructor(private _http: IContactFormService) {}

  clearForm(): void {
    this.contactForm.reset();
  }

  onSubmit(): void {
    this.subscription = this._http
      .sendContactMessage(this.contactForm.value)
      .subscribe({
        next: (ok: ContactResponse) => {
          this.contactForm.reset();
        },
        error: (error: HttpErrorResponse) => {},
        complete: () => {
          this.ngOnDestroy();
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
