import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import styled from 'styled-components';
import confetti from 'canvas-confetti';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layout';
import { useState } from 'react';
import { PokemonCard, PokemonFull, PokemonResponse } from '../../intefaces';
import { existFavorite, toggleFavorites } from '../../utils';

const PokemonByNamePage: NextPage<PokemonCard> = ({ id, name, sprites }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(existFavorite(id, name))

  const toggle = () => {
    toggleFavorites(id, name)
    setIsFavorite(!isFavorite)
    if (isFavorite) return;
    confetti({ zIndex: 999, particleCount: 100, spread: 160, angle: -100, origin: { x: 1, y: 0 } } )
  }

  return (
    <Layout title={`pokemon - ${name}`}>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable>
            <Card.Body>
              <Card.Image src={sprites.other?.dream_world.front_default || '/no-image.png'} alt={name} />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Header>
              <Text h1 size={30} transform='capitalize'>{name}</Text>
              <Button color='gradient' ghost={isFavorite} onClick={toggle}>{isFavorite ? 'Eliminar de favoritos' : 'Guardar en favoritos'}</Button>
            </Header>
            <Card.Body>
              <Text color='success' size={30} margin="auto">Sprites</Text>
              <Container display='flex'>
                <Image src={sprites.front_default} alt={name} />
                <Image src={sprites.back_default} alt={name} />
                <Image src={sprites.front_shiny} alt={name} />
                <Image src={sprites.back_shiny} alt={name} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');
  const pokemons: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemons.map(name => ({ params: { name } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data: { id, sprites } } = await pokeApi.get<PokemonFull>(`/pokemon/${name}`);  
  return { props: { id, name, sprites } }
}

const Header = styled(Card.Header)`
  display: flex;
  gap: 1em;
  justify-content: space-between;
  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default PokemonByNamePage;