import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateSearch } from './real-estate-search';

describe('RealEstateSearch', () => {
  let component: RealEstateSearch;
  let fixture: ComponentFixture<RealEstateSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
