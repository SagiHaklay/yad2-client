import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStep2Form } from './register-step2-form';

describe('RegisterStep2Form', () => {
  let component: RegisterStep2Form;
  let fixture: ComponentFixture<RegisterStep2Form>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterStep2Form]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterStep2Form);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
