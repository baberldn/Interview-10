import React, { useState } from "react";

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const IMAGES = [
    { id: 1, url: ONE },
    { id: 2, url: TWO },
    { id: 3, url: THREE },
    { id: 4, url: FOUR },
    { id: 5, url: FIVE },
    { id: 6, url: SIX },
  ];
  
  function App() {
    return <Captcha />;
  }
  
  const Captcha = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [targetNumber, setTargetNumber] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openCaptcha = () => {
      setTargetNumber(Math.floor(Math.random() * 6) + 1);
      setIsModalOpen(true);
      setSelectedImage(null);
    };
  
    const handleImageClick = (id) => {
      setSelectedImage(id);
      if (id === targetNumber) {
        alert("Doğru seçim! CAPTCHA doğrulandı.");
        setIsModalOpen(false);
      } else {
        alert("Yanlış seçim, lütfen tekrar deneyin.");
      }
    };
  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <button
          onClick={openCaptcha}
          className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          CAPTCHA'yı Başlat
        </button>
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md text-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                {targetNumber} numaralı resmi seçin
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {IMAGES.map((image) => (
                  <img
                    key={image.id}
                    src={image.url}
                    alt={`Image ${image.id}`}
                    onClick={() => handleImageClick(image.id)}
                    className="w-28 h-28 rounded-lg object-cover cursor-pointer transform hover:scale-105 hover:shadow-lg transition duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default App;
