import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoservicoService } from 'src/app/produto/servico/produtoservico.service';
import { ClienteservicoService } from 'src/app/cliente/servico/clienteservico.service';
import { Cliente } from 'src/app/cliente/servico/cliente';
import { ListaVendaItem } from '../servico/listavendaitem';
import { Venda } from '../servico/venda';
import { VendaservicoService } from '../servico/vendaservico.service';
import { Produto } from 'src/app/produto/servico/produto';


@Component({
  selector: 'app-vendamanter',
  templateUrl: './vendamanter.component.html',
  styleUrls: ['./vendamanter.component.scss']
})
export class VendamanterComponent implements OnInit {

  vendaItem: ListaVendaItem = new ListaVendaItem();
  venda: Venda = new Venda();

  codigoVenda: number;

  listCliente: Cliente[] = [];
  listProduto: Produto[] = [];

 constructor(
    private router: Router,
    private clienteService: ClienteservicoService,
    private produtoService: ProdutoservicoService,
    private vendaService: VendaservicoService

  ) { }

  ngOnInit(): void {
    this.trazerClientes();
    this.trazerProdutos();
  }

  trazerClientes(){
    this.clienteService.consultar('').subscribe(
      data => {
        this.listCliente = (data as Cliente[]);
      }
    );
  }

  trazerProdutos(){
    this.produtoService.consultar('').subscribe(
      data => {
        this.listProduto = (data as Produto[]);
      }
    );
  }

  adicionarProduto(){
   console.log(this.vendaItem);
   this.venda.listaVendaitem.push(this.vendaItem);
   this.vendaItem = new ListaVendaItem();
   console.log(this.venda.listaVendaitem);
  }

  incluirVenda(){
    this.vendaService.incluir(this.venda).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/venda']);
        console.log(this.venda);
      }
    );
  }

  excluirProduto(vendaItem){
    this.venda.listaVendaitem = this.venda.listaVendaitem.filter(obj => obj !== vendaItem);

  }

  voltar(){
    this.router.navigate(['/venda']);
  }

}
