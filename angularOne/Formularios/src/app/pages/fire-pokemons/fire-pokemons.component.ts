import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-fire-pokemons',
  templateUrl: './fire-pokemons.component.html',
  styleUrls: ['./fire-pokemons.component.css']
})
export class FirePokemonsComponent  implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  @ViewChild('tarjetas') tarjetasElement!: ElementRef; //para obtener una referencia a un elemento del DOM en Angular document.getElem...
  
  fireList: Resultado[] = [];

  pokemonSeleccionado?: Pokemon;
  detalle: boolean = false;

  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById('1');
  }

  async cargarLista() {  
    
    const pokemones = await this.pokemonService.getByPage();
    await Promise.all(
      pokemones.map(async (pokemon) => {
        const pokemonDetallado = await this.pokemonService.getById(pokemon.name);
        const tipos = pokemonDetallado.types.map((tipo) => tipo.type.name);
        if (tipos.includes('fire')) {
          this.fireList.push(pokemon);
        }
      })
    );

    this.fireList = [
      ...this.fireList
    ];
  }
  
  async tarjetaClickeada(id: string) {
    if (
      this.pokemonSeleccionado &&
      id === this.pokemonSeleccionado?.id.toString()
    ) {
      return this.cambiarEstadoDetalle();
    }
    this.pokemonSeleccionado = await this.pokemonService.getById(id);
  }

  cambiarEstadoDetalle() {
    if (this.pokemonSeleccionado) this.detalle = !this.detalle;
  }
}
