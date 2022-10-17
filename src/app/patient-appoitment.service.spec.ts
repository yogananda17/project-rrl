import { TestBed } from '@angular/core/testing';

import { PatientAppoitmentService } from './patient-appoitment.service';

describe('PatientAppoitmentService', () => {
  let service: PatientAppoitmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientAppoitmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
