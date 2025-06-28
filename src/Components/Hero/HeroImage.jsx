import React from 'react';
import image from "../../assets/image1.png";
import "./heroImage.css"

const HeroImage = () => {
    return (
      <div className="relative w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] rounded-full flex items-center overflow-hidden home-img z-10">
        {/* Rotating Conic Gradient Border */}
        <div className="img-box">
          <div className="img-item">
            <img
              src={image}
              alt="Shakil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
};

export default HeroImage;