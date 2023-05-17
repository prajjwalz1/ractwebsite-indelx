import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { product01 } from '@/assests';
import Image from 'next/image';
const ImageMagnifier = () => {
  const mainImage = '@/public/images/product01.png';

  return (
    <div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: {product01},
          },
          largeImage: {
            src: {product01},
            width: 1200,
            height: 1800,
          },
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
