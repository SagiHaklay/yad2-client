import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFilters } from './additional-filters';

describe('AdditionalFilters', () => {
  let component: AdditionalFilters;
  let fixture: ComponentFixture<AdditionalFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
