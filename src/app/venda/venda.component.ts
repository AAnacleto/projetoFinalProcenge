import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/servico/cliente';
import { ClienteservicoService } from '../cliente/servico/clienteservico.service';
import { Venda } from './servico/venda';
import { VendaservicoService } from './servico/vendaservico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  venda: Venda = new Venda();
  vendaSelecionada: Venda;

  listCliente: Cliente[] = [];
  listVendas: Venda[] = [];

  constructor(
    private clienteService: ClienteservicoService,
    private vendasService: VendaservicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.trazerClientes();
  }

  trazerClientes(){
    this.clienteService.consultar('').subscribe(
      data => {
        this.listCliente = (data as Cliente[]);
      }
    );
  }

  consultarVendas(){
    let codigoCliente = 0;
    if (this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendasService.consultar(codigoCliente).subscribe(
      data => {
        this.listVendas = (data as Venda[]);

      }
    );
  }

  consultarTodasVendas(){
    this.vendasService.consultarTodos().subscribe(
      data => {
        this.listVendas = (data as Venda[]);

      }
    );
  }

  fecharBusca(){
    this.listVendas = [];
  }

  selecionarVenda(valor){
    this.vendaSelecionada = valor;
  }

  incluirVenda(){
    this.router.navigate(['/venda/incluir']);
  }

  removerVenda(){
     this.vendasService.remover(this.vendaSelecionada).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );

  }


}
