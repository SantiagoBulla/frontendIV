import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-water-pokemons',
  templateUrl: './water-pokemons.component.html',
  styleUrls: ['./water-pokemons.component.css']
})
export class WaterPokemonsComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  @ViewChild('tarjetas') tarjetasElement!: ElementRef; //para obtener una referencia a un elemento del DOM en Angular document.getElem...
  
  waterList: Resultado[] = [];

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
        if (tipos.includes('water')) {
          this.waterList.push(pokemon);
        }
      })
    );

    this.waterList = [
      ...this.waterList
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