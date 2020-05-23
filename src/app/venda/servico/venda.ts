import { Cliente } from 'src/app/cliente/servico/cliente';
import { ListaVendaItem } from './listavendaitem';

export class Venda{
  codigo: number;
  data: Date;
  cliente: Cliente;
  listaVendaitem: ListaVendaItem[] = [];
}
