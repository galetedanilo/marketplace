import { HttpClient } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { PublicHttpClient } from '@app/core/classes/public-http-client.class';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PublicHttpClientService implements PublicHttpClient {
  private apiUrl: string = environment.apiUrl;
  
  constructor(@SkipSelf() private _httpClient: HttpClient) {}

  get<T>(resource: string): Observable<T> {
    return this._httpClient.get<T>(this.apiUrl.concat(resource));
  }

  post<T, R>(resource: string, body: T): Observable<R> {
    return this._httpClient.post<R>(this.apiUrl.concat(resource), body);
  }
}