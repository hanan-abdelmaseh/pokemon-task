import { Component, inject, signal } from '@angular/core';
import { PokemonService } from '../../core/Services/pokemon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule,MatCardModule,MatButtonModule,MatToolbarModule,RouterModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  private PokemonService = inject(PokemonService);

  pokemonList = signal<any[]>([]);
  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.PokemonService.getPokemonList().subscribe(res => {
      console.log(res)
      this.pokemonList.set(res.results);
    });
  }
}
