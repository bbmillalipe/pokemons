import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { CssBaseline } from '@nextui-org/react';

const MyDocument = () => (
   <Html lang="es">
      <Head>
         {CssBaseline.flush()}
         <link rel="icon" href="/logo.ico" />
      </Head>
      <body>
         <Main />
         <NextScript />
      </body>
   </Html>
)

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
   const initialProps = await Document.getInitialProps(ctx)
   return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
   }
}

export default MyDocument;