import { TestBed } from '@angular/core/testing';

import { RealEstateAdService } from './real-estate-ad-service';

describe('RealEstateAdService', () => {
  let service: RealEstateAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
