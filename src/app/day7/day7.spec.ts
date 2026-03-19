import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7 } from './day7';

describe('Day7', () => {
  let component: Day7;
  let fixture: ComponentFixture<Day7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
