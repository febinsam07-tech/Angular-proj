import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2 } from './day2';

describe('Day2', () => {
  let component: Day2;
  let fixture: ComponentFixture<Day2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
