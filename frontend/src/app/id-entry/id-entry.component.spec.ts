import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdEntryComponent } from './id-entry.component';

describe('IdEntryComponent', () => {
  let component: IdEntryComponent;
  let fixture: ComponentFixture<IdEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
