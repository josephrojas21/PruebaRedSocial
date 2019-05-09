import { TestBed } from '@angular/core/testing';

import { CurrentsRatesService } from './currents-rates.service';

describe('CurrentsRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentsRatesService = TestBed.get(CurrentsRatesService);
    expect(service).toBeTruthy();
  });
});
