import { Component, OnInit } from '@angular/core';
import { Member } from '../../../models/models';
import { MembersService } from '../../../services/members.service';

@Component({
  selector: 'datr-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members: Member[];
  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.membersService.getMembers().subscribe(members => {
      this.members = members;
      console.log(this.members);
    });
  }

}
