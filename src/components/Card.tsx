'use client';
import { getData } from '@/app/fetchdata';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Stars from './Stars';

interface Phone {
  id: number;
  title: string;
  price: string;
  image: string;
  about: string;
  star: number;
  review: number;
}

const Card: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const router = useRouter(); 

  useEffect(() => {
    const fetchData = async () => {
      const data: Phone[] = await getData<Phone[]>(`${window.location.origin}/api/phones`);
      setPhones(data);
    };
    fetchData();
  }, []);

  const handleCardClick = (id: number) => {
    router.push(`/shop/${id}`); // Navigate to the dynamic page for that phone
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 text-center bg-gray-100">
      {phones.map((item) => (
        <div
          key={item.id}
          className="h-auto w-full sm:w-60 px-4 py-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
          onClick={() => handleCardClick(item.id)} // On click, navigate to the items dynamic page
        >
          <div className="flex flex-col items-center">
            <Image src={item.image} alt="phone" width={150} height={150} className="mb-4 rounded-lg" />
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{item.title}</p>
              <p className="text-xl text-green-500 font-semibold mb-2">${item.price}</p>
              <Stars stars={item.star} reviews={item.review} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
