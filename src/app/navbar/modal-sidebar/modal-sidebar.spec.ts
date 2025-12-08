import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSidebar } from './modal-sidebar';

describe('ModalSidebar', () => {
  let component: ModalSidebar;
  let fixture: ComponentFixture<ModalSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
