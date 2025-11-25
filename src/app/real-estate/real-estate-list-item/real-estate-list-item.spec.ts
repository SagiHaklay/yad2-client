import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateListItem } from './real-estate-list-item';

describe('RealEstateListItem', () => {
  let component: RealEstateListItem;
  let fixture: ComponentFixture<RealEstateListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
