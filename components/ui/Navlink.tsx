import LinkContainer from "next/link";
import { Link } from "@nextui-org/react";

interface PropsNavlink {
   href: string;
   children: React.ReactNode;
}  

export const Navlink = ({ href, children }:PropsNavlink) => (
   <LinkContainer href={href} passHref>
      <Link>
         {children}
      </Link>
   </LinkContainer>
)