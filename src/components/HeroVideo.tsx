import React from "react";
import Image from "next/image";
import ProductImage from "../../public/images/productImage.png";

const HeroVideo: React.FunctionComponent = () => {
  return (
    <div className="w-1/2 h-full relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      >
        <source
          src="https://www.aesop.com/u1nb1km7t5q7/6Nrc3q0kos00YbwFDcQZA/3bfd8d64f9a7b402271bbe6d1e969da1/Aesop_PSAOIS_2021_Web_Homepage_Primary_V2_50-50_Desktop_1440x1500px.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute cursor-pointer right-0 -bottom-10 z-50 h-80 w-80">
        <Image src={ProductImage} alt="Product" layout="fill" />
      </div>
    </div>
  );
};

export default HeroVideo;
