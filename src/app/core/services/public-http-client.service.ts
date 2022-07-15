import { HttpClient } from "@angular/common/http";
import { Injectable, SkipSelf } from "@angular/core";
import { Observable } from "rxjs";
import { IPublicHttpClientService } from "../interfaces/public-http-client-service.interface";

@Injectable()
export class PublicHttpClientService implements IPublicHttpClientService {

  constructor(@SkipSelf() private _httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this._httpClient.get<T>(url);
  }
  post<T>(url: string, body: string): Observable<T> {
    return this._httpClient.post<T>(url, body)
  }

}