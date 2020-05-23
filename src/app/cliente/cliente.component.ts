import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteservicoService } from './servico/clienteservico.service';
import { Cliente } from './servico/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  clienteSelecionado: Cliente;

  listCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private clienteService: ClienteservicoService
  ) { }

  ngOnInit(): void{

  }

  pesquisarCliente(){
    this.clienteService.consultar(this.cliente.nome).subscribe(
        data => {
           this.listCliente = (data as Cliente[]);
           console.log(this.listCliente);
          }
      );
  }

  pesquisarTodosClientes(){
    this.clienteService.consultar('').subscribe(
      data => {
         this.listCliente = (data as Cliente[]);
         console.log(this.listCliente);
      }
    );
  }

  fecharPesquisa(){
    this.listCliente = [];
  }

  selecionarCliente(valor){
    this.clienteSelecionado = valor;
  }

  incluirCliente(){
    this.router.navigate(['/cliente/incluir']);
  }

  alterarCliente(){
    this.router.navigate(['/cliente/alterar/' + this.clienteSelecionado.nome]);
  }

  removerCliente(){
     this.clienteService.remover(this.clienteSelecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );

  }

}
