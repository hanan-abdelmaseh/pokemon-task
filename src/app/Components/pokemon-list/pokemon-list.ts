import { Component, computed, inject, signal } from '@angular/core';
import { PokemonService } from '../../core/Services/pokemon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { PokemonCard } from '../../core/Models/Pokemon.model';
import { SearchComponent } from '../../Shared/search/search';
import { MatPaginatorModule } from '@angular/material/paginator';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, MatCardModule, MatButtonModule,
    MatToolbarModule, RouterModule, RouterLink, SearchComponent, MatPaginatorModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  private PokemonService = inject(PokemonService);

  pokemonList = signal<PokemonCard[]>([]);

  searchValue = signal('');
  pageSize = signal(20);
  pageIndex = signal(0);
  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.PokemonService.getPokemonList().subscribe({
      next:(res)=>{
      this.pokemonList.set(res);
      },
      error:(err)=>console.log(err)
      
    });
  }
  onSearchHandler(name: string) {
    this.searchValue.set(name);
    this.pageIndex.set(0);
  }
  // filtered list 
  filteredList = computed(() => {
    return this.pokemonList().filter((item) => item.name.includes(this.searchValue().toLowerCase()))
  })

  resetFilters(): void {
    this.searchValue.set('');
  }
  paginatedPokemon = computed(() => {

    const start = this.pageIndex() * this.pageSize();
    const end = start + this.pageSize();

    return this.filteredList().slice(start, end);
  });
  onPageChange(event: any): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }
}
