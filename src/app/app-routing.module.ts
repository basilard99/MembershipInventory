import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { IdEntryComponent } from './id-entry/id-entry.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  { path: '', component: IdEntryComponent },
  { path: 'member/:id', component: MembershipComponent}
];

@NgModule({
  declarations: [ 
    IdEntryComponent,
    MembershipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
