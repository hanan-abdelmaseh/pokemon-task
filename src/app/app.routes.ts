import { Routes } from '@angular/router';
import { PokemonList } from './Components/pokemon-list/pokemon-list';
import { PokemonDetail } from './Components/pokemon-detail/pokemon-detail';

export const routes: Routes = [ {
    path: '',
    component: PokemonList
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetail
  }];
