import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ClienteservicoService } from './cliente/servico/clienteservico.service';
import { ProdutoservicoService } from './produto/servico/produtoservico.service';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { VendamanterComponent } from './venda/vendamanter/vendamanter.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ClienteComponent,
    ProdutoComponent,
    VendaComponent,
    ClientemanterComponent,
    ProdutomanterComponent,
    VendamanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClienteservicoService,
    ProdutoservicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
