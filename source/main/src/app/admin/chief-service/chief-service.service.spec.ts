import { TestBed } from '@angular/core/testing';

import { ChiefServiceService } from './chief-service.service';

describe('ChiefServiceService', () => {
  let service: ChiefServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChiefServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
