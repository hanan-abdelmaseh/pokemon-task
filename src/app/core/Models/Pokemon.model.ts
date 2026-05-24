export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}
export interface PokemonCard {
  id: number;
  name: string;
  image: string;
  types: string[];
}
export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: Type[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
}

export interface Other {
  dream_world: {
    front_default: string;
    front_female: any;
  };
  home: {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  'official-artwork': {
    front_default: string;
    front_shiny: string;
  };
}
