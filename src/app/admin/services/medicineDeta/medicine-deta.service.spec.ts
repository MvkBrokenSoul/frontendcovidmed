import { TestBed } from '@angular/core/testing';

import { MedicineDetaService } from './medicine-deta.service';

describe('MedicineDetaService', () => {
  let service: MedicineDetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineDetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
