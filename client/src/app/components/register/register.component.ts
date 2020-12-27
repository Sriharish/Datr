import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'datr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelClicked = new EventEmitter();
  @Output() userRegistered = new EventEmitter();

  model: any = {};
  passwordRepeated: string;

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model as User).subscribe((user) => {
      this.userRegistered.emit(true);
    }, error => {
        console.log(error);
        this.toastr.error(error.error, error.title);
    });
  }

  cancel() {
    this.cancelClicked.emit(false);
  }

}
