import { Text, useTheme } from "@nextui-org/react";
import Image from "next/image"
import styled from 'styled-components';
import { Navlink } from "./Navlink";

export const Menu = () => {
   const { theme } = useTheme();
   return (
      <ContainerMenu theme={theme}>
         <Flex>
            <Image
               src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
               alt="icono de la app"
               width={70}
               height={70}
            />
            <Navlink href='/'>
               <Text b>P</Text>
               <Text b>okémons</Text>
            </Navlink>
         </Flex>
         <Navlink href='/favorites'>
            <Text b>Favoritos</Text>
         </Navlink>
      </ContainerMenu>
   )
}

const ContainerMenu = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 1em;
   background-color: ${({ theme }) => theme && theme.colors.gray900.value};
`;

const Flex = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;