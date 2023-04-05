import Head from "next/head";

import ContentSection from "./ContentSection";
import TitleSection from "./TitleSection";

const Layout = () => {
  return (
    <>
      <Head>
        <title>workShowcaseManagerApp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header></header>
      <main className="font-poppins min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col">

        <TitleSection />
        <ContentSection className="flex-grow pt-8" />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
