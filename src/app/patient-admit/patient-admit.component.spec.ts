import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAdmitComponent } from './patient-admit.component';

describe('PatientAdmitComponent', () => {
  let component: PatientAdmitComponent;
  let fixture: ComponentFixture<PatientAdmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAdmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAdmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
