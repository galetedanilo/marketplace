import { Injectable } from "@angular/core";
import { IContactFormService } from "../interfaces/contatct-form-service.interface";

@Injectable()
export class ContactFormService implements IContactFormService {
  
  sendContact(): void {
    throw new Error("Method not implemented.");
  }
}