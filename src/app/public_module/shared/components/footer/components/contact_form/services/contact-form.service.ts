import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPublicHttpClientService } from 'src/app/core/interfaces/public-http-client-service.interface';

import { IContactFormService } from '../interfaces/contact-form-service.interface';
import { ContactRequest } from '../interfaces/contact-request.interface';
import { ContactResponse } from '../interfaces/contatc-response.interface';

@Injectable()
export class ContactFormService implements IContactFormService {
  private url = 'comments';

  constructor(private httpClient: IPublicHttpClientService) {}
  
  sendContactMessage(body: ContactRequest): Observable<ContactResponse> {
    return this.httpClient.post<any>(this.url, body)
  }
}