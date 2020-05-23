import { Component, OnInit } from '@angular/core';
import { Produto } from '../servico/produto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoservicoService } from '../servico/produtoservico.service';

@Component({
  selector: 'app-produtomanter',
  templateUrl: './produtomanter.component.html',
  styleUrls: ['./produtomanter.component.scss']
})
export class ProdutomanterComponent implements OnInit {

  nomeProduto: string = ' ';
  produto: Produto = new Produto();
  operacao: string = 'Novo Produto';

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private produtoService: ProdutoservicoService
  ) { }

  ngOnInit(): void {
    this.nomeProduto = this.routeActivated.snapshot.params.nome;
    if (this.nomeProduto != null){
      this.operacao = 'Alterar';
      this.produtoService.consultar(this.nomeProduto).subscribe(
        data => {
          this.produto = (data as Produto[])[0];
        }
      );
    }
  }

  incluirNovoProduto(){
    this.produtoService.incluir(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.voltar();
      }
    );
  }

  alterarDadosProduto(){
    this.produtoService.alterar(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);
      }
    );
  }

  voltar(){
   this.router.navigate(['/produto']);
  }

}
