import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pokemon, PokemonListResponse } from '../Models/Pokemon.model';
import { forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  private baseUrl = 'https://pokeapi.co/api/v2';

  //get list 
  //get specific details for card 
  getPokemonList(limit = 21,offset = 0) {
    return this.http.get<PokemonListResponse>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        switchMap(response => {
          const requests = response.results.map(pokemon =>
            this.http.get<any>(pokemon.url)
          );
          return forkJoin(requests);
        }), map(pokemons => {
          return pokemons.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            image:
              pokemon.sprites.other['official-artwork'].front_default,
            types:
              pokemon.types.map((t: any) => t.type.name)
          }));
        })
      );
  }
  //getPokemonDetail
  getPokemonDetail(name: string | null) {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`)
  }
}
