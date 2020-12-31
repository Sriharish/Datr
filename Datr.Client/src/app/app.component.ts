import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/models';
import { AccountService } from './services/account.service';

@Component({
  selector: 'datr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Le Datr';
  users: any;

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  private setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}
