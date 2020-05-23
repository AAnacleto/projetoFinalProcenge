import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { VendamanterComponent } from './venda/vendamanter/vendamanter.component';


const routes: Routes = [
   {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/incluir',
    component: ClientemanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/alterar/:nome',
    component: ClientemanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto',
    component: ProdutoComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/incluir',
    component: ProdutomanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/alterar/:nome',
    component: ProdutomanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda',
    component: VendaComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda/incluir',
    component: VendamanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda/alterar/:codigo',
    component: VendamanterComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
