import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day60 } from './day6.0';

describe('Day60', () => {
  let component: Day60;
  let fixture: ComponentFixture<Day60>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day60]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day60);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
