import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../servico/cliente';
import { ClienteservicoService } from '../servico/clienteservico.service';

@Component({
  selector: 'app-clientemanter',
  templateUrl: './clientemanter.component.html',
  styleUrls: ['./clientemanter.component.scss']
})
export class ClientemanterComponent implements OnInit {

  nomeCliente: string = ' ';
  cliente: Cliente = new Cliente();
  operacao: string = 'Novo Cliente';

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private clienteService: ClienteservicoService
    ) { }

  ngOnInit(): void {
    this.nomeCliente = this.routeActivated.snapshot.params.nome;
    if (this.nomeCliente != null){
      this.operacao = 'Alterar Dados';
      this.clienteService.consultar(this.nomeCliente).subscribe(
        data => {
          this.cliente = (data as Cliente[])[0];
        }
      );
    }
  }

  incluirNovoCliente(){
    this.clienteService.incluir(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.voltar();
      }
    );
  }

  alterarDadosCliente(){
    this.clienteService.alterar(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/cliente']);
      }
    );
  }

  voltar(){
   this.router.navigate(['/cliente']);
  }

}
