import { Injectable, SkipSelf } from "@angular/core";
import { PublicHttpClientService } from "src/app/core/services/public-http-client.service";
import { IForgotPasswordService } from "../interfaces/forgot-password-service.interface";

@Injectable()
export class ForgotPasswordService implements IForgotPasswordService {
  constructor(@SkipSelf() private _http: PublicHttpClientService) {}

  sendResetPassword(): void {
    
  }
}