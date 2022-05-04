import { useEffect, useState } from "react"
import { Layout } from "../../components/layout"
import { FavoritesPokemons, NoFavorites } from "../../components/pokemon"
import { pokeSchema } from "../../intefaces"
import { pokemonsfavorites } from "../../utils"

const FavoritesPage = () => {
  const [pokemons, setPokemons] = useState<pokeSchema[]>([])
  useEffect(() => {
    setPokemons(pokemonsfavorites)
  }, []);
  return (
    <Layout title='Pokémons favoritos'>
      {pokemons.length === 0 ? <NoFavorites /> : <FavoritesPokemons pokemons={pokemons} />}
    </Layout>
  )
}

export default FavoritesPage