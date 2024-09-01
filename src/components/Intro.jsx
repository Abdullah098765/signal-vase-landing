import React from 'react';
import Image from 'next/image';
import testImage from "../../public/digital_coin.png";
import Link from 'next/link';

const Intro = () => {
  return (
    <section id="about" className="p-8"
    style={{
      backgroundImage: 'radial-gradient(ellipse, #389cff 10%, #2c84e6 20%, #2061ac 40%, #143d72 70%, #071c39 90%)'
  }}
    >
      <div className="flex items-center justify-center min-h-screen pt-16"
      
      >
        <div className="flex flex-col md:flex-row text-main-color rounded-lg h-auto md:h-[95vh] shadow-lg overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white">
          <div className="relative w-full md:flex-1 h-64 md:h-auto">
            <Image
              src={testImage}
              alt="Digital Coin"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
          <div className="flex-1 p-8 flex flex-col justify-center bg-opacity-30 bg-[#071c39] backdrop-filter backdrop-blur-lg">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">Empowering traders with EtherealCash</h1>
            <p className="text-base md:text-lg mb-6 text-white">
              EtherealCash is the cryptocurrency designed exclusively for Signal Vase, a social media platform created for traders to share signals and posts related to various trading assets. EtherealCash serves as the primary currency for purchasing signals and investing in Signal Vase.
            </p>
            <Link href="/contact" className="bg-main-color text-white py-2 px-4 rounded hover:bg-opacity-50 hover:backdrop-filter hover:backdrop-blur-md hover:text-main-color transition-all duration-300">
              Get in Touch
            </Link>
          </div>
          
        </div>
      </div>
      
    </section>

  );
};

export default Intro;
