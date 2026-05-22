import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pokemon, PokemonListResponse } from '../Models/Pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  private baseUrl = 'https://pokeapi.co/api/v2';

  //get list 
  getPokemonList(limit=20 ,offset =0){
   return this.http.get<PokemonListResponse>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
  }
  //getPokemonDetail
  getPokemonDetail(name:string |null ){
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`)
  }


}
