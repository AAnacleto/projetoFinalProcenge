import { Produto } from 'src/app/produto/servico/produto';

export class ListaVendaItem{
  codigo: number;
  produto: Produto[] = [];
  quantidade: number;
}
