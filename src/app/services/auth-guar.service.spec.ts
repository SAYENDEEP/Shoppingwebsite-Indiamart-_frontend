import { TestBed } from '@angular/core/testing';

import { AuthGuarService } from './auth-guar.service';

describe('AuthGuarService', () => {
  let service: AuthGuarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
