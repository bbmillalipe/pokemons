import { Container, Text, Image } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container display='flex' justify='center' alignItems='center' direction='column' css={{minHeight: '80vh', gap: '2em'}}>
      <Text h1 size={30}>No hay favoritos</Text>
      <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg' alt='No hay favoritos'/>
    </Container>
  )
}