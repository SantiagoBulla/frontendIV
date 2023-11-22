import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  
  async getAllPokemons(page:number, size: number = 40):Promise<Resultado[]>{
    if(page > 25) return [];
    const offset = size*(page-1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`)
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results
    return [];    
  }
  
  async getByPage():Promise<Resultado[]>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results
    return [];    
  }
  
  async getById(id:string):Promise<Pokemon>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await res.json();
  }


  async getDescripcion(id:string | number):Promise<string>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any) =>  texto.language.name === "es")
    return texto.flavor_text;
  }


}
