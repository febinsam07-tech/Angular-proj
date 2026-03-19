import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day31 } from './day3.1';

describe('Day31', () => {
  let component: Day31;
  let fixture: ComponentFixture<Day31>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day31]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day31);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
