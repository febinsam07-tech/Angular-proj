import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dayy2 } from './dayy2';

describe('Dayy2', () => {
  let component: Dayy2;
  let fixture: ComponentFixture<Dayy2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dayy2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dayy2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
