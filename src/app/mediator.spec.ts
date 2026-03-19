import { TestBed } from '@angular/core/testing';

import { Mediator } from './mediator';

describe('Mediator', () => {
  let service: Mediator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mediator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
