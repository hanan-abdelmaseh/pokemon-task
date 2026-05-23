import { Component, inject, signal } from '@angular/core';
import { PokemonService } from '../../core/Services/pokemon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { PokemonCard } from '../../core/Models/Pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule,MatCardModule,MatButtonModule,MatToolbarModule,RouterModule,RouterLink],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  private PokemonService = inject(PokemonService);

  pokemonList = signal<PokemonCard[]>([]);
  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.PokemonService.getPokemonList().subscribe(res => {
      console.log(res)
      this.pokemonList.set(res);
    });
  }
  //implement image 
//   getImageForPokemon(id:number): string {
//  //return  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
//  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

//   }
}
