import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoservicoService {

  constructor(private http: HttpClient) { }

  consultar(nome: string){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/consultar/' + nome);
  }
  incluir(produto: Produto ){
   return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/incluir', produto);
  }
  alterar(produto: Produto){
    return this.http.patch('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/alterarparcial', produto);
  }
  remover(produto: Produto){
   return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/remover', produto);
  }

}
