import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { pokeSchema } from "../../intefaces";

export const FavoritesPokemons = ({ pokemons }:{ pokemons: pokeSchema[] }) => {
   const router = useRouter();
   return (
      <Grid.Container gap={2}>
         {pokemons.map(poke => (
            <Grid xs={6} sm={3} md={2} xl={1} key={poke.id}>
               <Card hoverable clickable onClick={() => router.push(`pokemon/${poke.name}`)}>
                  <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`} height={140} />
               </Card>
            </Grid>
         ))}
      </Grid.Container>
   )
}