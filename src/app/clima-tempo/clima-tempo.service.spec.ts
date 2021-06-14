import { TestBed } from '@angular/core/testing';

import { ClimaTempoService } from './clima-tempo.service';

describe('ClimaTempoService', () => {
  let service: ClimaTempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaTempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
