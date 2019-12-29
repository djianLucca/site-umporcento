import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './components/pages/default-page/default-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';


const appRoutes: Routes = [
  { path: '', component: DefaultPageComponent },
  { path: 'manha', component: DefaultPageComponent },
  { path: 'tarde', component: DefaultPageComponent },
  { path: 'noite', component: DefaultPageComponent },
  { path: 'manha/bussola', component: DefaultPageComponent },
  { path: 'manha/manual-da-marca', component: DefaultPageComponent },
  { path: 'manha/dez-anos', component: DefaultPageComponent },
  { path: 'manha/guia-de-cultura', component: DefaultPageComponent },
  { path: 'manha/arvore', component: DefaultPageComponent },
  { path: 'manha/guardioes', component: DefaultPageComponent},
  { path: 'tarde/linha-do-tempo', component: DefaultPageComponent },
  { path: 'noite/contato', component: DefaultPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
