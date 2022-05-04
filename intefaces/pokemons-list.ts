export interface PokemonResponse {
   count:     number;
   next?:     string;
   previous?: string;
   results:   Pokemon[];
}

export interface Pokemon {
   name: string;
   id:   number;
   img:  string;
}

export interface Pokemons {
   pokemons: Pokemon[];
}

export interface pokeSchema {
   id: number;
   name: string;
}