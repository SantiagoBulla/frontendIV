import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TarjetaPokemonComponent } from './components/tarjeta-pokemon/tarjeta-pokemon.component';
import { FotoPokemonComponent } from './components/foto-pokemon/foto-pokemon.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaPokemonComponent,
    FotoPokemonComponent,
    DetalleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule//es necesario para poder trabajar con el formGroup y todo lo de formularios dinamicos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
