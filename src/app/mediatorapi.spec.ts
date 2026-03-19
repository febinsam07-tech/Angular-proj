import { TestBed } from '@angular/core/testing';

import { Mediatorapi } from './mediatorapi';

describe('Mediatorapi', () => {
  let service: Mediatorapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mediatorapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
