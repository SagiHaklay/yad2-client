import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { realEstateListResolver } from './real-estate-list-resolver';
import { RealEstateAd } from './real-estate-ad';

describe('realEstateListResolver', () => {
  const executeResolver: ResolveFn<RealEstateAd[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => realEstateListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
