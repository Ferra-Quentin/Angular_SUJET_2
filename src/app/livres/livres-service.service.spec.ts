import { TestBed } from '@angular/core/testing';

import { LivresServiceService } from './livres-service.service';

describe('LivresServiceService', () => {
  let service: LivresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
