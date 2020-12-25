import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Le Datr';
  users: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  private async getUsers() {
    this.http.get("https://localhost:44334/api/users").subscribe(response => {
      this.users = response;
      console.log(this.users);
    }, error => {
        console.log(error);
    });
  }
}
