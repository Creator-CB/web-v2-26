
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8 rounded-md flex items-center justify-center mr-2 relative overflow-hidden">
        <img 
          src="/lovable-uploads/c1509c05-8d2d-4a14-a210-64c039e36124.png" 
          alt="NovaTrust Logo" 
          className="h-full w-full object-contain"
        />
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        NovaTrust Invest
      </span>
    </div>
  );
};

export default Logo;
