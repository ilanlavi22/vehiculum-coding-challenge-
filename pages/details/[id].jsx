import { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { formatCurrency } from '../../utilities/formatCurrency';

const sliderSettings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  lazyLoad: true,
  asNavFor: '.slider-nav'
};

const settingsThumbs = {
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  swipeToSlide: true,
  focusOnSelect: true,
  centerPadding: '10px'
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://vehiculum-coding-challenge.herokuapp.com/api/search-results`
  );
  const data = await response.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  const id = params.id;

  const res = await fetch(
    `https://vehiculum-coding-challenge.herokuapp.com/api/details/${params.id}`
  );
  const data = await res.json();

  return {
    props: { data }
  };
}

const Details = ({ data }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  console.log(data);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  return (
    <div>
      <Link
        href="/"
        className="inline-block bg-white rounded-xl p-2 px-4 mt-5 mb-10"
      >
        Back
      </Link>
      <h1 className="text-3xl">{data.model}</h1>

      <div className="flex flex-col my-5">
        <div className="flex gap-8">
          <p className=" text-lg mt-2">
            <span className="block text-xxs text-gray-600 leading-normal uppercase">
              Monthly Rate
            </span>
            {formatCurrency(data.grossMonthlyRate.amount)}
          </p>

          <p className=" text-lg mt-2">
            <span className="block text-xxs text-gray-600 leading-normal uppercase">
              Registration Date
            </span>
            {data.year}
          </p>

          <p className=" text-lg mt-2">
            <span className="block text-xxs text-gray-600 leading-normal uppercase">
              Color
            </span>
            <span
              className={`block rounded-xl w-4 h-4 car-${data.color} my-3`}
            ></span>
          </p>
        </div>
        <div className="flex gap-8">
          <p className=" text-lg mt-2">
            <span className="block text-xxs text-gray-600 leading-normal uppercase">
              Gear
            </span>
            <span className="block text-sm">{data.gearType}</span>
          </p>
          <p className=" text-lg mt-2">
            <span className="block text-xxs text-gray-600 leading-normal uppercase">
              Seats
            </span>
            <span className="block text-sm">{data.seats}</span>
          </p>
          <p className=" text-lg mt-2">
            <span className="block text-xxs text-gray-600 leading-normal uppercase">
              Fuel Type
            </span>
            <span className="block text-sm">{data.fuelType}</span>
          </p>
          <p className=" text-lg mt-2">
            <span className="block text-xxs text-gray-600 leading-normal uppercase">
              Power
            </span>
            <span className="block text-sm">{data.power.amount} HP</span>
          </p>
        </div>
      </div>
      <div className="slider-container">
        <Slider
          {...sliderSettings}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {data.images?.map((image, index) => {
            return (
              <div className="slick-slide" key={index}>
                <Image
                  layout="responsive"
                  className="slick-slide-image"
                  src={`https://vehiculum-coding-challenge.herokuapp.com${image.m}`}
                  alt={data.model}
                  width={711}
                  height={400}
                  quality={100}
                ></Image>
              </div>
            );
          })}
        </Slider>

        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {data.images?.map((image, index) => {
              return (
                <div className="slick-slide" key={index}>
                  <Image
                    layout="responsive"
                    src={`https://vehiculum-coding-challenge.herokuapp.com${image.s}`}
                    className="slick-slide-image"
                    alt={data.model}
                    width={356}
                    height={200}
                    quality={100}
                  ></Image>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Details;
