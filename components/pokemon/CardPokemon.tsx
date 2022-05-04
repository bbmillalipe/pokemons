import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { Pokemon } from "../../intefaces"

export const CardPokemon = ({ id, name, img }: Pokemon) => {
   const router = useRouter();
   return (
      <Grid xs={6} sm={3} md={2} xl={1} key={id}>
         <Card hoverable clickable onClick={() => router.push(`/pokemon/${name}`)}>
            <Card.Body>
               <Card.Image src={img} />
            </Card.Body>
            <Card.Footer>
               <Row justify='space-between'>
                  <Text transform='capitalize'>{name}</Text>
                  <Text>#{id}</Text>
               </Row>
            </Card.Footer>
         </Card>
      </Grid>
   )
}