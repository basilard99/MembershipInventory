import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-id-entry',
  templateUrl: './id-entry.component.html',
  styleUrls: ['./id-entry.component.scss']
})
export class IdEntryComponent {
  form: FormGroup = new FormGroup({
    memberId: new FormControl('')
  });

  constructor(private router: Router) { }

  submit() {
    var memberId = this.form.get('memberId')?.value;
    console.error(`Here!!! ${memberId}`)
    this.router.navigate([`/member/${memberId}`])
  }
}
