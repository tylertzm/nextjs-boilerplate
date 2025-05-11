import { useEffect, useState } from 'react';

const terms = [
  ['Teknologi', 'AI', 'Reka Bentuk'],
  ['技术', '人工智能', '设计'],
  ['Technologie', 'KI', 'Kunst'],
  ['Technology', 'AI', 'Design']
];

const ColorGradientGrid = () => {
  const [gradient, setGradient] = useState(
    'linear-gradient(90deg, #8B0000, #00008B)'
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(
        `linear-gradient(90deg, hsl(${Math.random() * 360}, 100%, 30%), hsl(${Math.random() * 360}, 100%, 30%))`
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8 text-center p-6 sm:p-8 lg:p-10 text-white'
      style={{ background: gradient }}
    >
      {terms.flat().map((term, index) => (
        <div
          key={index}
          className='p-3 sm:p-4 lg:p-6 text-lg sm:text-xl lg:text-2xl xl:text-3xl rounded-xl bg-opacity-50 backdrop-blur-md'
        >
          {term}
        </div>
      ))}
    </div>
  );
};

export default ColorGradientGrid;