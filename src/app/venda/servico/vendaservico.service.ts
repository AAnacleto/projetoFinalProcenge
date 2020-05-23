import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venda } from './venda';


@Injectable({
  providedIn: 'root'
})
export class VendaservicoService {

  constructor(private http: HttpClient) { }

  consultar(codigo: number){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/' + codigo);
  }
  consultarTodos(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/');
  }
  incluir(venda: Venda){
    return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir', venda);
  }
  alterar(venda: Venda){
    return this.http.patch('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/alterarparcial', venda);
  }
  remover(venda: Venda){
    return this.http.post('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover', venda);
  }
}
