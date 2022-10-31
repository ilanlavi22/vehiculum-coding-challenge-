import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '../utilities/formatCurrency';

const CarCard = ({
  id,
  model,
  grossMonthlyRate,
  color,
  name,
  images: { m }
}) => {
  return (
    <Link
      href={`/details/${id}`}
      className="border border-[#e8e8e8] rounded-md shadow-sm bg-gradient-to-b from-[#fff] via-[#fff] to-[#ecebeb] hover:scale-105 md:transform-none origin-center transition-scale duration-300"
    >
      <Image
        layout="responsive"
        src={`https://vehiculum-coding-challenge.herokuapp.com${m}`}
        alt={model}
        width={711}
        height={400}
        quality={100}
      ></Image>
      <div className="p-4">
        <p className="text-xs text-mu">{name}</p>
        <p className="text-sm">{model}</p>
        <p className={`rounded-xl w-4 h-4 car-${color} my-3`}></p>
        <p className="text-sm text-end pb-2">
          <span className="block text-xxs text-gray-600 ">Monthly Rate</span>{' '}
          {formatCurrency(grossMonthlyRate.amount)}
        </p>
      </div>
    </Link>
  );
};

export default CarCard;
