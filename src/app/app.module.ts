import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1FormularioComponent } from './componente1-formulario/componente1-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Componente2ListaComponent } from './componente2-lista/componente2-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1FormularioComponent,
    Componente2ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
