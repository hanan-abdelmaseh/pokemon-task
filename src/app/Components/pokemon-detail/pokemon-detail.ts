import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../core/Services/pokemon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pokemon } from '../../core/Models/Pokemon.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from "../../Shared/breadcrumb/breadcrumb";

@Component({
  selector: 'app-pokemon-detail',
  imports: [MatCardModule,
    MatButtonModule, MatProgressBarModule, CommonModule, Breadcrumb],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css',
})
export class PokemonDetail implements OnInit {

   private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);

  pokemonItem = signal<Pokemon | null>(null);
  pokemonName = this.route.snapshot.paramMap.get('name')
  ngOnInit(): void {
    this.getPokemonDetails();
  }
  getPokemonDetails(){
    this.pokemonService.getPokemonDetail(this.pokemonName).subscribe((res)=>
    {
      console.log(res)
      this.pokemonItem.set(res)
    });
  }
}
