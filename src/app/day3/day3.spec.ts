import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3 } from './day3';

describe('Day3', () => {
  let component: Day3;
  let fixture: ComponentFixture<Day3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
