import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAds } from './saved-ads';

describe('SavedAds', () => {
  let component: SavedAds;
  let fixture: ComponentFixture<SavedAds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedAds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedAds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
