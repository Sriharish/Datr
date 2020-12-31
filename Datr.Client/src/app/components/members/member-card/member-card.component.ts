import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../../models/models';

@Component({
  selector: 'datr-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input() member: Member;
  constructor() { }

  ngOnInit(): void {
  }

}
