import { useEffect, useState } from 'react';

const WineLoader = () => {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFill(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 500); // Adjust speed of fill

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="relative w-20 h-80">
        {/* Bottle outline */}
        <div className="absolute w-full h-full border-2 border-white rounded-sm">
          {/* Bottle neck */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-8 border-2 border-white" />
          
          {/* Wine fill animation */}
          <div 
            className="absolute bottom-0 w-full bg-red-800 transition-all duration-300 ease-in-out"
            style={{ 
              height: `${fill}%`,
              background: 'linear-gradient(to right, #722F37, #8B0000)'
            }}
          />
          
          {/* Loading percentage */}
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-white">
            {fill}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineLoader; 