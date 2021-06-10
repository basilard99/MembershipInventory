import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IMember } from '../membership/member';
import { MemberService } from '../membership/member.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  public Member: Observable<IMember> | undefined;

  private id: string = "test";
  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      console.log('The id of this route is: ', params.id);
      this.Member = this.memberService.Load(params.id);
    });
  };

  isExpired(expiration: Date): boolean {
    let currentDate = new Date();
    return expiration < currentDate;
  }
}
