import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ElectricPokemonsComponent } from './pages/electric-pokemons/electric-pokemons.component';
import { FirePokemonsComponent } from './pages/fire-pokemons/fire-pokemons.component';
import { WaterPokemonsComponent } from './pages/water-pokemons/water-pokemons.component';
import { GrassPokemonsComponent } from './pages/grass-pokemons/grass-pokemons.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'dashboard',
    component: HomeComponent,
  },
  {
    path: 'electric',
    component: ElectricPokemonsComponent,
  },
  {
    path: 'fire',
    component: FirePokemonsComponent,
  },
  {
    path: 'water',
    component: WaterPokemonsComponent,
  },
  {
    path: 'grass',
    component: GrassPokemonsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
