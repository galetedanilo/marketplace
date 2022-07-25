import { Injectable } from '@angular/core';
import { PublicHttpClient } from '@app/core/classes/public-http-client.class';

import { IAuthService } from '../interfaces/auth-service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private _http: PublicHttpClient) {}

  auth(): void {
    
  }
}