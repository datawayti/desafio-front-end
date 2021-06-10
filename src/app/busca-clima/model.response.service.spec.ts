import { TestBed } from '@angular/core/testing';

import { Model.ResponseService } from './model.response.service';

describe('Model.ResponseService', () => {
  let service: Model.ResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Model.ResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
