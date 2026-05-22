import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonListResponse } from '../Models/Pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  //get list 
  getPokemonList(limit=20 ,offset =0){
   return this.http.get<PokemonListResponse>(`${this.baseUrl}?limit=${limit}&offset=${offset}`)
  }
  //getPokemonDetail
  getPokemonDetail(name:string){
     `${this.baseUrl}/${name}`
  }
  getPokemonById(id: number) {
  return this.http.get<any>(
    `${this.baseUrl}/${id}`
  );
}
}
