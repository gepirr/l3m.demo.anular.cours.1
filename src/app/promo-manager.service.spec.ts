import { TestBed } from '@angular/core/testing';

import { PromoManagerService } from './promo-manager.service';

describe('PromoManagerService', () => {
  let service: PromoManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
