import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTypeFilter } from './property-type-filter';

describe('PropertyTypeFilter', () => {
  let component: PropertyTypeFilter;
  let fixture: ComponentFixture<PropertyTypeFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyTypeFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyTypeFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
