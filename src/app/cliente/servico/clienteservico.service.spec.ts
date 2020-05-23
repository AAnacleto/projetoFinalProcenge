import { TestBed } from '@angular/core/testing';

import { ClienteservicoService } from './clienteservico.service';

describe('ClienteservicoService', () => {
  let service: ClienteservicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteservicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
