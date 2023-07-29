import { TestBed } from '@angular/core/testing';

import { EmploymentcontractService } from './employmentcontract.service';

describe('EmploymentcontractService', () => {
  let service: EmploymentcontractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploymentcontractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
