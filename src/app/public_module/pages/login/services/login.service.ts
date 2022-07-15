import { Injectable } from "@angular/core";
import { IPublicHttpClientService } from "src/app/core/interfaces/public-http-client-service.interface";
import { ILoginService } from "../interfaces/login-service.interface";

@Injectable()
export class LoginService implements ILoginService {
  constructor(private _http: IPublicHttpClientService) {}

  auth(): void {
    
  }
}