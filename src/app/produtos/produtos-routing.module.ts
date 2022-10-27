import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
const routes: Routes = [
  {path: 'produtos-forms', component: ProdutosFormComponent},
  {path: 'produtos-forms/:id', component: ProdutosFormComponent},
  {path: 'produtos-lista', component: ProdutosListaComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
