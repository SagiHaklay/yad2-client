import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateAdsPage } from './real-estate-ads-page';

describe('RealEstateAdsPage', () => {
  let component: RealEstateAdsPage;
  let fixture: ComponentFixture<RealEstateAdsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateAdsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateAdsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
