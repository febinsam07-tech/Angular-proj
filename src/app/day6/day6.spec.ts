import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6 } from './day6';

describe('Day6', () => {
  let component: Day6;
  let fixture: ComponentFixture<Day6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
