import { Observable } from "rxjs";
import { ContactRequest } from "./contact-request.interface";
import { ContactResponse } from "./contatc-response.interface";

export abstract class IContactFormService {
  abstract sendContactMessage(body: ContactRequest): Observable<ContactResponse>;
}