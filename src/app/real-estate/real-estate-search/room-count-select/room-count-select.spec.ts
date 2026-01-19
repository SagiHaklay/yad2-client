import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCountSelect } from './room-count-select';

describe('RoomCountSelect', () => {
  let component: RoomCountSelect;
  let fixture: ComponentFixture<RoomCountSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomCountSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomCountSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
