
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8 rounded-md bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mr-2">
        <span className="text-white font-bold text-lg">N</span>
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        NovaTrust Invest
      </span>
    </div>
  );
};

export default Logo;
