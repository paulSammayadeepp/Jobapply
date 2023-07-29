import { TestBed } from '@angular/core/testing';

import { EmploymentContractGuard } from './employment-contract.guard';

describe('EmploymentContractGuard', () => {
  let guard: EmploymentContractGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmploymentContractGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
