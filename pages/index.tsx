import { Card, Grid, Text } from '@nextui-org/react'
import { NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layout'
import { CardPokemon } from '../components/pokemon'
import { Pokemon, PokemonResponse, Pokemons } from '../intefaces'

const HomePage: NextPage<Pokemons> = ({ pokemons }) => (
  <Layout title='Pokémons'>
    <Grid.Container gap={2}>
      {pokemons.map(pokemon => <CardPokemon key={pokemon.id} {...pokemon} />)}
    </Grid.Container>
    <Grid.Container>
      <Card>
        <Text margin='auto' b>© Bruno Millalipe</Text>
      </Card>
    </Grid.Container>
  </Layout>
)

export const getStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');

  const pokemons: Pokemon[] = data.results.map((pokemon, i) => ({
    id: i + 1,
    name: pokemon.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: { pokemons }
  }
}

export default HomePage
