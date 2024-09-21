'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 

interface Phone {
  id: number;
  title: string;
  price: number;
  image: string;
  about: string;
  star: number;
  review: number;
}

const CartPage = () => {
  const [product, setProduct] = useState<Phone[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [orderConfirmed, setOrderConfirmed] = useState(false); 
  const router = useRouter(); // Router for navigation

  useEffect(() => {
    const getFromLocal = localStorage.getItem('cart');
    if (getFromLocal) {
      const cartItems = JSON.parse(getFromLocal);
      setProduct(cartItems);
      const initialQuantities: { [key: number]: number } = {};
      cartItems.forEach((item: Phone) => {
        initialQuantities[item.id] = 1;
      });
      setQuantities(initialQuantities);
      calculateTotalPrice(cartItems, initialQuantities);
    }
  }, []);

  const calculateTotalPrice = (products: Phone[], updatedQuantities: { [key: number]: number }) => {
    const total = products.reduce((acc, item) => acc + item.price * updatedQuantities[item.id], 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (id: number, change: number) => {
    const updatedQuantities = { ...quantities };
    updatedQuantities[id] += change;
    if (updatedQuantities[id] < 1) {
      updatedQuantities[id] = 1;
    }
    setQuantities(updatedQuantities);
    calculateTotalPrice(product, updatedQuantities);
  };

  const handleRemoveFromCart = (id: number) => {
    const updatedProducts = product.filter(item => item.id !== id);
    setProduct(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[id];
    setQuantities(updatedQuantities);
    calculateTotalPrice(updatedProducts, updatedQuantities);
  };

  const handleConfirmOrder = () => {
    setProduct([]);
    setQuantities({});
    setTotalPrice(0);
    localStorage.removeItem('cart');
    setOrderConfirmed(true); // Show confirmation message
  };

  const handleContinueShopping = () => {
    router.push('/shop'); // Redirect to shop page 
  };

  if (product.length === 0 && !orderConfirmed) {
    return <div className="flex justify-center flex-col items-center h-screen">
      <h1 className='text-3xl'>Your cart is empty.</h1>
      <button
            onClick={handleContinueShopping}
            className='mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-800'
          >
            Continue Shopping
          </button>
      </div>;
  }

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center p-4'>
      {orderConfirmed ? (
        <div className="flex flex-col items-center">
          <h1 className="text-green-600 text-3xl mb-4">Order Confirmed!</h1>
          <p>Your order has been successfully placed and will be delivered soon.</p>
          <button
            onClick={handleContinueShopping}
            className='mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-800'
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <h1 className='text-pink-600 font-serif text-3xl mb-4 '>SHOPPING CART</h1> 
          <div className='w-full max-w-4xl h-auto'>
            {product.map((item) => (
              <div key={item.id} className='flex flex-col md:flex-row gap-4 md:gap-20 my-8 px-4 md:px-8 border-b pb-4'>
                <div className='flex justify-center items-center w-full md:w-1/4'>
                  <Image src={item.image} alt='phone' width={80} height={100} className='w-full h-auto max-w-[120px] md:max-w-[150px]' /> 
                </div>
                <div className='flex-1'>
                  <h2 className='font-semibold'>{item.title}</h2>
                  <div className='mt-2 flex flex-col md:flex-row md:items-center md:gap-4'>
                    <div className='flex gap-2 items-center mb-2 md:mb-0'>
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className='bg-red-500 w-8 h-8 text-xl font-bold text-white'
                      >
                        -
                      </button>
                      <span className='w-10 text-center'>{quantities[item.id]}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className='bg-green-700 w-8 h-8 text-xl font-bold text-white'
                      >
                        +
                      </button>
                    </div>
                    <p className='text-green-500 font-semibold'>${(item.price * quantities[item.id]).toFixed(2)}</p>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className='text-pink-600 underline'
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full pr-4 md:pr-20 mt-4'>
            <h2 className='text-2xl font-semibold'>Total Amount: ${totalPrice.toFixed(2)}</h2>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={handleConfirmOrder}
              className='px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600'
            >
              Confirm Order
              </button>
            
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
