import { Routes } from '@angular/router';
import { PokemonList } from './Components/pokemon-list/pokemon-list';
import { PokemonDetail } from './Components/pokemon-detail/pokemon-detail';
import { Home } from './Shared/home/home';

export const routes: Routes = [ 
 {
    path: '',
    component: Home
  },

  {
    path: 'pokemon/:name',
    component: PokemonDetail
  },
  {
    path: 'pokemons',
    component: PokemonList
  },

   {
    path: '**',
    redirectTo: ''
  }

]
