import Image from 'next/image';
import React from 'react';

const LandingPoweredby = () => {


  return (
    <div className="px-40 py-10 bg-transparent flex items-center justify-center grid grid-row-2" style={{ maxWidth: '2000px' }}>
      <div>
        <div>
            <h2 className="text-center text-4xl text-black font-extrabold mb-10">
                Powered by
            </h2>
        </div>
      <div>
      <Image height={200} width={1200} alt="company logo" src="/company_logo.png" />
      </div>
      </div>
    </div>
  );
};

export default LandingPoweredby;
