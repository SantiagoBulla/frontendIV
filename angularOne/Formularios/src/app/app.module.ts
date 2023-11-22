import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TarjetaPokemonComponent } from './components/tarjeta-pokemon/tarjeta-pokemon.component';
import { FotoPokemonComponent } from './components/foto-pokemon/foto-pokemon.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { ElectricPokemonsComponent } from './pages/electric-pokemons/electric-pokemons.component';
import { WaterPokemonsComponent } from './pages/water-pokemons/water-pokemons.component';
import { FirePokemonsComponent } from './pages/fire-pokemons/fire-pokemons.component';
import { GrassPokemonsComponent } from './pages/grass-pokemons/grass-pokemons.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaPokemonComponent,
    FotoPokemonComponent,
    DetalleComponent,
    HomeComponent,
    ElectricPokemonsComponent,
    WaterPokemonsComponent,
    FirePokemonsComponent,
    GrassPokemonsComponent,
    IndexComponent,
    LoginFormComponent,
    RegisterFormComponent
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
