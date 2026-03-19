import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day41 } from './day4.1';

describe('Day41', () => {
  let component: Day41;
  let fixture: ComponentFixture<Day41>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day41]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day41);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
