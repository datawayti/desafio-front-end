import { TestBed } from '@angular/core/testing';

import { CapitaisService } from './capitais.service';

describe('CapitaisService', () => {
  let service: CapitaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapitaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
