import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateList } from './real-estate-list';

describe('RealEstateList', () => {
  let component: RealEstateList;
  let fixture: ComponentFixture<RealEstateList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
