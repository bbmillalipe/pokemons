import Head from "next/head"
import { Menu } from "../ui";

interface PropsLayout {
   title?: string;
   children: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout = ({ children, title }: PropsLayout) => (
   <>
      <Head>
         <title>{title || 'Pokemon App'}</title>
         <meta name="author" content="Bruno Millalipe" />
         <meta name="description" content={`Información sobre el pokémon ${title}`} />
         <meta name="keywords" content={`${title}, pokemon, pokedex`} />

         <meta property="og:title" content={`Información sobre ${title}`} />
         <meta property="og:description" content={`Esta es la página sobre ${title}`} />
         <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Menu />
      <main>
         {children}
      </main>
   </>
)