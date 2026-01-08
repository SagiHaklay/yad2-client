import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangeInput } from './price-range-input';

describe('PriceRangeInput', () => {
  let component: PriceRangeInput;
  let fixture: ComponentFixture<PriceRangeInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceRangeInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceRangeInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
