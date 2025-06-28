import React from 'react';
import image from "../../assets/image.jpg";
import "./heroImage.css"

const HeroImage = () => {
    return (
      <div className="relative w-96 h-96 rounded-full flex items-center justify-center overflow-hidden home-img">
        {/* Rotating Conic Gradient Border */}
        <div className="img-box rounded-full">
          <div className="img-item rounded-full">
            {/* <img
              src={image}
              alt="Shakil"
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>
      </div>
    );
};

export default HeroImage;