import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/lista'},
  { path:'lista', component:ListaTareasComponent},
  { path:'agregar', component:FormularioComponent},
  { path:'**', redirectTo:'/lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
