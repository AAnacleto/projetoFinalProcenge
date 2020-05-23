import { Component, OnInit } from '@angular/core';
import { Produto } from './servico/produto';
import { Router } from '@angular/router';
import { ProdutoservicoService } from './servico/produtoservico.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  produtoSelecionado: Produto;

  listProduto: Produto[] = [];

  constructor(
    private router: Router,
    private produtoService: ProdutoservicoService
  ) { }

  ngOnInit(): void {
  }

  pesquisarProduto(){
    this.produtoService.consultar(this.produto.nome).subscribe(
        data => {
           this.listProduto = (data as Produto[]);
           console.log(this.listProduto);
          }
      );
  }

  pesquisarTodosProdutos(){
    this.produtoService.consultar('').subscribe(
      data => {
         this.listProduto = (data as Produto[]);
         console.log(this.listProduto);
      }
    );
  }

  fecharPesquisa(){
    this.listProduto = [];
  }

  selecionarProduto(valor){
    this.produtoSelecionado = valor;
  }

  incluirProduto(){
    this.router.navigate(['/produto/incluir']);
  }

  alterarProduto(){
    this.router.navigate(['/produto/alterar/' + this.produtoSelecionado.nome]);
  }

  removerProduto(){
     this.produtoService.remover(this.produtoSelecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );

  }

}
