import { Injectable } from "@angular/core";
import { IPublicHttpClientService } from "src/app/core/interfaces/public-http-client-service.interface";
import { IAuthService } from "../interfaces/auth-service.interface";

@Injectable()
export class AuthService implements IAuthService {
  constructor(private _http: IPublicHttpClientService) {}

  auth(): void {
    
  }
}