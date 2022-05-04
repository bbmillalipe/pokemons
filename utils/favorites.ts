import { pokeSchema } from "../intefaces";

export const toggleFavorites = (id: number, name:string) => {
   let favorites: pokeSchema[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');
   const pokeIds = favorites.map(poke => poke.id);
   if(pokeIds.includes(id)){
      favorites = favorites.filter(poke => poke.id !== id);
   } else {
      favorites.push({id, name});
   }
   localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const existFavorite = (id:number, name:string):boolean => {
   if(typeof window === 'undefined') return false;
   const favorites: pokeSchema[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');
   const pokeIds = favorites.map(poke => poke.id);

   return pokeIds.includes(id);
}

export const pokemonsfavorites = ():pokeSchema[] => {
   if(typeof window === 'undefined') return [];
   return JSON.parse(localStorage.getItem('favorites') ?? '[]');
}