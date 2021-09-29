import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApimysqlnodeService {
  // url = 'https://test-mysql-api.herokuapp.com/customers';
  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(public http: HttpClient) {}
  getPosts() {
    return new Promise((resolve) => {
      this.http.get(this.url).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
