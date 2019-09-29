import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultIconPageComponent } from './components/pages/default-icon-page/default-icon-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';


const appRoutes: Routes = [
  { path: '', component: DefaultIconPageComponent },
  { path: 'manha', component: DefaultIconPageComponent },
  { path: 'tarde', component: DefaultIconPageComponent },
  { path: 'noite', component: DefaultIconPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
