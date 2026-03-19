import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5 } from './day5';

describe('Day5', () => {
  let component: Day5;
  let fixture: ComponentFixture<Day5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
