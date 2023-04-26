import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1FormularioComponent } from './componente1-formulario/componente1-formulario.component';
import { Componente2ListaComponent } from './componente2-lista/componente2-lista.component';

const routes: Routes = [
  {path: '',component:Componente2ListaComponent,children: [

    {path: 'lista', component:Componente2ListaComponent,},
    {path:'formulario/:id',component:Componente1FormularioComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
