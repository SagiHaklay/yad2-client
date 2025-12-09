import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavbar } from './site-navbar';

describe('SiteNavbar', () => {
  let component: SiteNavbar;
  let fixture: ComponentFixture<SiteNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
