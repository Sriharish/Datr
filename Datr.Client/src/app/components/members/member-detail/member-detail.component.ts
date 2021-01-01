import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../../models/models';
import { MembersService } from '../../../services/members.service';

@Component({
  selector: 'datr-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  member: Member;
  constructor(private membersService: MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.membersService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => this.member = member);
  }
}
