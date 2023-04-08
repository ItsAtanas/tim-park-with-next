import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tim With Next</title>
        <meta
          name="description"
          content="App the makes sure that Tim gets on in time"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>tim parks house</p>
      </main>
    </>
  );
}
