import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AlienService {

  /**
   *
   * @param http
   */
  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   *
   */
  getData(): Observable<any> {

    //return the result of the get request
    return this.http.get(".messages");
  }

  /**
   *
   */
  sendData(data: any): Observable<any> {

    //add api.key to http-header
    const headers = new HttpHeaders().set("x-api-key", "your-api-key")
    
    //send the post request
    this.http.post("./messages", data, { headers }).subscribe(error => { console.error(error) });

    //return the data which were successfully transmitted
    return data;

  }
}
