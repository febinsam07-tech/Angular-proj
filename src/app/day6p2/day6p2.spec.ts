import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6p2 } from './day6p2';

describe('Day6p2', () => {
  let component: Day6p2;
  let fixture: ComponentFixture<Day6p2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day6p2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day6p2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
