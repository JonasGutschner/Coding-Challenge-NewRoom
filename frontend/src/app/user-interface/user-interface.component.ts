import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.scss']
})
export class UserInterfaceComponent {
  nickname!: string;
  message!: string;
  Date!: Date;

  constructor(private http: HttpClient) { }

  SendData(): void {
    this.Date = new Date;

    const Data = {
      nickname: this.nickname,
      message: this.message,
      Date: this.Date
    };

    //add api.key to http-header
    const headers = new HttpHeaders().set("x-api-key", "your-api-key")

    //send the data to the backend  endpoint
    this.http.post("./messages", Data, { headers }).subscribe(error => { console.error(error) });

  }
}
