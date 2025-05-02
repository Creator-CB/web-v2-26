
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8 rounded-md bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mr-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 rounded-sm transform rotate-45 translate-x-3 translate-y-2"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-white/20 rounded-tr-sm"></div>
        <span className="text-white font-bold text-lg relative z-10">N</span>
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        NovaTrust Invest
      </span>
    </div>
  );
};

export default Logo;
