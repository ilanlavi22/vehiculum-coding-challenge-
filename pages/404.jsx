import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/');
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Listing | 404</title>
        <meta name="description" content="Frontend Coding Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[80%]">
        <h1 className="uppercase my-8 font-semibold text-2xl">404</h1>
        <p className="  text-sm pb-5">Whoops, that page is gone</p>

        <p className="  text-sm pb-5">
          This page is going to be redirected to the{' '}
          <Link href="/">Homepage</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
