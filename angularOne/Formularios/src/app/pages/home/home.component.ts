import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  @ViewChild('tarjetas') tarjetasElement!: ElementRef; //para obtener una referencia a un elemento del DOM en Angular document.getElem...

  waterList: Resultado[] = [];
  fireList: Resultado[] = [];
  grassList: Resultado[] = [];
  electricList: Resultado[] = [];
  otherList: Resultado[] = [];

  pokemonSeleccionado?: Pokemon;
  detalle: boolean = false;

  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById('1');
    // const variable = this.pokemonService.getByPage(5, 100).then((response) => {
    //   response.forEach((element) => {
    //     this.pokemonService.getById(element.name).then((response) => {
    //       response.types.forEach((item) => {
    //         console.log(item.type.name);
    //         let categoria = item.type.name;
    //         switch (categoria) {
    //           case 'grass':
    //             this.grassList.push(element);
    //             break;
    //           case 'fire':
    //             this.fireList.push(element);
    //             break;
    //           case 'electric':
    //             this.electricList.push(element);
    //             break;
    //           case 'water':
    //             this.waterList.push(element);
    //             break;
    //           default:
    //             this.otherList.push(element);
    //             break;
    //         }
    //       });
    //     });
    //   });
    // });
    // console.log(this.grassList);
    // console.log(this.fireList);
    // console.log(this.waterList);
    // console.log(this.electricList);
    // console.log(this.otherList);
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

/**import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  @ViewChild('tarjetas') tarjetasElement!: ElementRef; //para obtener una referencia a un elemento del DOM en Angular document.getElem...

  listaPokemon: Resultado[] = [];
  water: any[] = [];
  fire: any[] = [];
  grass: any[] = [];
  electric: any[] = [];
  other: any[] = [];

  pagina: number = 1;
  cargando: boolean = false;
  pokemonSeleccionado?: Pokemon;
  detalle: boolean = false;

  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById('1');
    const variable = this.pokemonService.getByPage(5, 100).then((response) => {
      response.forEach((element) => {
        this.pokemonService.getById(element.name).then((response) => {
          response.types.forEach((item) => {
            console.log(item.type.name);  
            let categoria = item.type.name;
            switch (categoria) {
              case 'grass':
                this.grass.push(element);
                break;
              case 'fire':
                this.fire.push(element);
                break;
              case 'electric':
                this.electric.push(element);
                break;
              case 'water':
                this.water.push(element);
                break;
              default:
                this.other.push(element);
                break;
            }
          });
        });
      });
    });
    console.log(this.grass);
    console.log(this.fire);
    console.log(this.water);
    console.log(this.electric);
    console.log(this.other);
  }

  async cargarLista() {
    this.cargando = true;

    this.listaPokemon = [
      ...this.listaPokemon,
      ...(await this.pokemonService.getByPage(this.pagina)),
    ];
    this.cargando = false;
    this.pagina++;
  }

  onScroll(e: any) {
    if (this.cargando) return;
    if (
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight +
          this.tarjetasElement.nativeElement.scrollTop
      ) === e.srcElement.scrollHeight
    ) {
      this.cargarLista();
    }
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
 */
