import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishRealEstateAdPage } from './publish-real-estate-ad-page';

describe('PublishRealEstateAdPage', () => {
  let component: PublishRealEstateAdPage;
  let fixture: ComponentFixture<PublishRealEstateAdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishRealEstateAdPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishRealEstateAdPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
