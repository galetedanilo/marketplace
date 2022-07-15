import { Observable } from "rxjs";

export abstract class IPublicHttpClientService {

  abstract get<T>(url: string): Observable<T>;

  abstract post<T>(url: string, body: string): Observable<T>;

}