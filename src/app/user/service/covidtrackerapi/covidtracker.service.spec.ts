import { TestBed } from '@angular/core/testing';

import { CovidtrackerService } from './covidtracker.service';

describe('CovidtrackerService', () => {
  let service: CovidtrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidtrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
