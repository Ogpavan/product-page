import React, { useState } from 'react';
import one from './assets/laptop-1.png';
import two from './assets/laptop-2.png';
import three from './assets/laptop-3.png';
import four from './assets/laptop-4.png';
import five from './assets/laptop-5.png';
import blurredOne from './assets/blur-laptop-1.webp';
import blurredTwo from './assets/blur-laptop-2.webp';
import blurredThree from './assets/blur-laptop-3.webp';
import blurredFour from './assets/blur-laptop-4.webp';
import blurredFive from './assets/blur-laptop-5.webp';
import Section2 from './components/Section2';

function App() {
  const [selectedImage, setSelectedImage] = useState(one);
  const [selectedBlurredImage, setSelectedBlurredImage] = useState(blurredOne);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const [batteryPrice, setBatteryPrice] = useState(100);
  const [storagePrice, setStoragePrice] = useState(200);
  const [ramPrice, setRamPrice] = useState(300);

  const images = [two, three, four, five];
  const blurredImages = [blurredTwo, blurredThree, blurredFour, blurredFive];

  const incrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity < 20 ? prevQuantity + 1 : 20));
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    } else {
      setQuantity(0);
    }
  };

  const handleBatteryChange = (price) => {
    setBatteryPrice(price);
  };

  const handleStorageChange = (price) => {
    setStoragePrice(price);
  };

  const handleRamChange = (price) => {
    setRamPrice(price);
  };

  const totalPrice = (batteryPrice + storagePrice + ramPrice) * quantity;

  const handleImageClick = (img, blurredImg) => {
    setSelectedImage(img);
    setSelectedBlurredImage(blurredImg);
    setImageLoaded(false);
  };

  return (
    <section className=''>
      <div className="max-w-[1200px] container lg:w-5/6 mx-auto p-4 flex flex-col items-center md:flex-row gap-4">
        <div className="flex-1 flex flex-col items-center justify-center border-r">
          <div className="relative">
            {!imageLoaded && (
              <img
                src={selectedBlurredImage}
                alt="Loading..."
                className="mb-2 lg:max-w-full blur-lg"
              />
            )}
            <img
              src={selectedImage}
              alt="Selected Laptop"
              className={`mb-2 lg:max-w-full ${imageLoaded ? 'blur-0' : 'hidden'}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <div className="flex overflow-auto justify-center gap-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Laptop ${index + 2}`}
                className="w-1/5 border-2 p-2 cursor-pointer"
                onClick={() => handleImageClick(img, blurredImages[index])}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 md:p-4 mt-5">
          <h1 className="text-3xl open-sans-bold">Work Plan</h1>
          <p className='open-sans-medium'>SKU: 364215376135191</p>
          <div className='flex flex-col gap-6 mt-5'>
            <div>
              <p className='open-sans-semibold text'>Battery Life</p>
              <div className='flex gap-2 mt-2'>
                <p
                  className={`open-sans-medium border-2 py-2 px-4 rounded-md cursor-pointer ${batteryPrice === 100 ? 'border-blue-600' : 'border-gray-300 hover:border-blue-600'}`}
                  onClick={() => handleBatteryChange(100)}
                >
                  2-3 Hours
                </p>
                <p
                  className={`open-sans-medium border-2 py-2 px-4 rounded-md cursor-pointer ${batteryPrice === 200 ? 'border-blue-600' : 'border-gray-300 hover:border-blue-600'}`}
                  onClick={() => handleBatteryChange(200)}
                >
                  5-6 Hours
                </p>
                <p
                  className={`open-sans-medium border-2 py-2 px-4 rounded-md cursor-pointer ${batteryPrice === 300 ? 'border-blue-600' : 'border-gray-300 hover:border-blue-600'}`}
                  onClick={() => handleBatteryChange(300)}
                >
                  8-9 Hours
                </p>
              </div>
            </div>

            <div>
              <p className='open-sans-semibold text'>Storage</p>
              <div className='flex gap-2 mt-2'>
                <p
                  className={`open-sans-medium border-2 py-2 px-4 rounded-md cursor-pointer ${storagePrice === 200 ? 'border-blue-600' : 'border-gray-300 hover:border-blue-600'}`}
                  onClick={() => handleStorageChange(200)}
                >
                  256 GB
                </p>
                <p
                  className={`open-sans-medium border-2 py-2 px-4 rounded-md cursor-pointer ${storagePrice === 400 ? 'border-blue-600' : 'border-gray-300 hover:border-blue-600'}`}
                  onClick={() => handleStorageChange(400)}
                >
                  512 GB
                </p>
                <p
                  className={`open-sans-medium border-2 py-2 px-4 rounded-md cursor-pointer ${storagePrice === 800 ? 'border-gray-200' : 'border-gray-300 text-gray-400'}`}
                >
                  1 TB
                </p>
              </div>
            </div>

            <div>
              <p className='open-sans-semibold text'>Memory (RAM)</p>
              <div className='flex gap-2 mt-2'>
                <p
                  className={`open-sans-medium border-2 py-2 px-4 rounded-md cursor-pointer ${ramPrice === 300 ? 'border-blue-600' : 'border-gray-300 hover:border-blue-600'}`}
                  onClick={() => handleRamChange(300)}
                >
                  8 GB
                </p>
                <p
                  className={`open-sans-medium border-2 py-2 px-4 rounded-md cursor-pointer ${ramPrice === 600 ? 'border-gray-200' : 'border-gray-300 text-gray-400'}`}
                >
                  16 GB
                </p>
                <p
                  className={`open-sans-medium border-2 py-2 px-4 rounded-md cursor-pointer ${ramPrice === 900 ? 'border-blue-600' : 'border-gray-300 hover:border-blue-600'}`}
                  onClick={() => handleRamChange(900)}
                >
                  32 GB
                </p>
              </div>
            </div>

            <form>
              <label htmlFor="quantity-input" className="block mb-2 text open-sans-semibold">
                Choose quantity:
              </label>
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  onClick={decrementQuantity}
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={quantity}
                  onChange={handleChange}
                  placeholder="999"
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  onClick={incrementQuantity}
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>
              <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Please select a number from 0 to 20.
              </p>
            </form>

            <hr/>

            <div className="  ">
              <h2 className="text-2xl open-sans-bold ">Total Price: Rs. {60 * totalPrice}</h2>
              <p>Excluding Taxes</p>
              <button className="mt-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 text-white w-full py-3 px-6 rounded-md open-sans-semibold  ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Section2 />
    </section>
  );
}

export default App;
