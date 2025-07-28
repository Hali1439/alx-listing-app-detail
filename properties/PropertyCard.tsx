import { PropertyProps } from '../../interfaces';
import Image from 'next/image';

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  price,
  image,
  discount,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          {address.city}, {address.country}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {category.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="mt-2 font-semibold">
          ${price}
          <span className="text-gray-500 text-sm font-normal"> / night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;