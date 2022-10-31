import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>VEHICULUM - Frontend Coding Challenge</title>
        <meta name="description" content="Frontend Coding Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[80%]">
        <h1 className="uppercase my-8 font-semibold text-2xl">
          The leasing guide
        </h1>
        <p className="  text-sm pb-5">
          Car leasing is not just beneficial for businesses. Leasing is also
          worthwhile for private individuals and is therefore a popular form of
          financing for the purchase of a car. Everything you need to know about
          leasing can be found here!
        </p>
        <p className="  text-sm pb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          reiciendis quos ratione et, magni ab dolorem, assumenda vel fugit
          ipsam ea ipsa, veniam maiores unde facere. Autem impedit rerum
          assumenda?
        </p>
      </div>
    </>
  );
};

export default AboutPage;
