import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstatePage } from './real-estate-page';

describe('RealEstatePage', () => {
  let component: RealEstatePage;
  let fixture: ComponentFixture<RealEstatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
