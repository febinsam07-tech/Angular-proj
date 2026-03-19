import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4 } from './day4';

describe('Day4', () => {
  let component: Day4;
  let fixture: ComponentFixture<Day4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
