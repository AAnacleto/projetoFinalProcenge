import { TestBed } from '@angular/core/testing';

import { ProdutoservicoService } from './produtoservico.service';

describe('ProdutoservicoService', () => {
  let service: ProdutoservicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoservicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
