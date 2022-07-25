import { Observable } from 'rxjs';

import { ContactMessageRequest } from '../interfaces/contact-message-request.interface';
import { ContactMessageResponse } from '../interfaces/contact-message-response.interface';

export abstract class ContactMessage {
  abstract sendContactMessage(body: ContactMessageRequest): Observable<ContactMessageResponse>;
}