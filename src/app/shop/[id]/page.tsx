
'use client';
import { useState,useEffect } from "react";
import { getData } from "@/app/fetchdata";
import Image from "next/image";
import Stars from "@/components/Stars";

interface Phone {
  id: number;
  title: string;
  price: string;
  image: string;
  about: string;
  star: number;
  review: number;
}

const PhoneDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [data, setData] = useState<Phone | null>(null);
  const [showPopup, setShowPopup] = useState(false); // Popup state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData: Phone = await getData<Phone>(`${process.env.NEXT_PUBLIC_URL}/${id}`);
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    if (data) {
      // Check if 'cart' already exists in localStorage
      const cartItems = localStorage.getItem('cart');
      
      // If cart exists, parse it, otherwise initialize as an empty array
      let cart = cartItems ? JSON.parse(cartItems) : [];
  
      // cart is always an array
      if (!Array.isArray(cart)) {
        cart = [];
      }
  
      // Add the new item to the cart
      cart.push(data);
  
      // Update localStorage with the new cart
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // Show popup
      setShowPopup(true);
  
      // Hide popup after 2 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };
  
  

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex p-4 md:flex-row flex-col">
      <div className="sm-w-1/2 md:w-1/2">
        <Image
          src={data.image}
          height={400}
          width={400}
          alt={`Phone image`}
          className="rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 px-6">
        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
        <p className="text-xl font-semibold text-green-600 mb-4">${data.price}</p>
        <Stars stars={data.star} reviews={data.review} />
        <h2 className="mt-2 font-medium">About this item</h2>
        <p className="text-gray-700 mb-6">{data.about}</p>

        {/* Add to Cart button */}
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add to Cart
        </button>

        {/* Popup notification */}
        {showPopup && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg">
            Added to cart!
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneDetail;


