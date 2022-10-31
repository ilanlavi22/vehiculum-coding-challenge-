import Head from 'next/head';

import CardCard from '../components/CarCard';


const baseApiUrl = 'https://vehiculum-coding-challenge.herokuapp.com/api';

async function arrayFetch(urls) {
  const promises = await urls.map(async (url) => {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  });

  return Promise.all(promises);
}


export async function getServerSideProps() {
  const res = await fetch(`${baseApiUrl}/search-results`);
  const data = await res.json();

  const productUrls = data.map(
    (item) => `${baseApiUrl}/details/${item.id}`
  );
  const products = await arrayFetch(productUrls);

  const _makes = await fetch(`${baseApiUrl}/makes`);
  const makes = await _makes.json();

  const results = data.map((item, index) => {
    const name = makes.find((make) => make.id == item.makeId).name;
    const color = products.find((product) => product.id === item.id)?.color || 'black';

    return {
      ...item,
      color,
      name
    };
  });

  return {
    props: {
      results
    }
  };
}

export default function Home({ results }) {

  return (
    <>
      <Head>
        <title>VEHICULUM - Frontend Coding Challenge</title>
        <meta name="description" content="Frontend Coding Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-250 gap-6 justify-center">
        {results?.length == 0 ? (
          <div>Loading...</div>
        ) : (
          results?.map((result) => {
            return (
              <CardCard key={result.id} {...result} />
            );
          })
        )}
      </div>
    </>
  );
}