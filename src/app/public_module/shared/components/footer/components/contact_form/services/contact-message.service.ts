import { Injectable } from '@angular/core';
import { PublicHttpClient } from '@app/core/classes/public-http-client.class';
import { Observable } from 'rxjs';

import { ContactMessage } from '../classes/contact-message.class';
import { ContactMessageRequest } from '../interfaces/contact-message-request.interface';
import { ContactMessageResponse } from '../interfaces/contact-message-response.interface';

@Injectable()
export class ContactMessageService implements ContactMessage {
  private resource = '/comments';

  constructor(private _httpClient: PublicHttpClient) {}

  sendContactMessage(
    body: ContactMessageRequest
  ): Observable<ContactMessageResponse> {
    return this._httpClient.post(this.resource, body);
  }
}
