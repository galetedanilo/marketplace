import { HttpClient } from "@angular/common/http";
import { Injectable, SkipSelf } from "@angular/core";
import { Observable } from "rxjs";
import { IPublicHttpClientService } from "../interfaces/public-http-client-service.interface";

import { environment } from "src/environments/environment";

@Injectable()
export class PublicHttpClientService implements IPublicHttpClientService {
  private apiUrl = environment.apiUrl;

  constructor(@SkipSelf() private _httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this._httpClient.get<T>(this.apiUrl.concat(url));
  }
  post<T>(url: string, body: T): Observable<T> {
    return this._httpClient.post<T>(this.apiUrl.concat(url), body)
  }

}