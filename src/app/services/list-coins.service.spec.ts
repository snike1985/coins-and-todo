import { TestBed, inject } from '@angular/core/testing';

import { ListCoinsService } from './list-coins.service';

describe('ListCoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListCoinsService]
    });
  });

  it('should be created', inject([ListCoinsService], (service: ListCoinsService) => {
    expect(service).toBeTruthy();
  }));
});
