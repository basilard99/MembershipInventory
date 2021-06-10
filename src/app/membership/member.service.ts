import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IMember } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  public Load(id: string): Observable<IMember> {
    let members: Array<IMember> = [
      { MemberId: -1, Name: "Missing Member", ExpirationDate: new Date('1970-01-01'), Status: 'Unknown' },
      { MemberId: 1, Name: 'Chris Snyder', ExpirationDate: new Date('2100-12-31') , Status: 'Unknown' },
      { MemberId: 2, Name: 'Jesse Busch', ExpirationDate: new Date('2021-06-19') , Status: 'Unknown' },
      { MemberId: 3, Name: 'Ian Fielder', ExpirationDate: new Date('2020-12-31') , Status: 'Unknown' }
    ]

    let member = members.find(m => m.MemberId === Number.parseInt(id));
    
    if (member) {
      let currentDate = new Date();
      let renewDate = new Date();
      renewDate.setDate(currentDate.getDate() + 14);

      if (member.ExpirationDate < currentDate) {
        member.Status = 'Expired';
      }
      else if (member.ExpirationDate <= renewDate) {
        member.Status = 'Renewal';
      }
      else {
        member.Status = "Current";
      }

      return of(member);
    }
    else {
      return of(members[0]);
    }
  }
}
