import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateAdDetail } from './real-estate-ad-detail';

describe('RealEstateAdDetail', () => {
  let component: RealEstateAdDetail;
  let fixture: ComponentFixture<RealEstateAdDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateAdDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateAdDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
