import { TestBed } from '@angular/core/testing';

import { VendaservicoService } from './vendaservico.service';

describe('VendaservicoService', () => {
  let service: VendaservicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendaservicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
