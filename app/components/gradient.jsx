import { useState } from 'react';

const terms = [
  ['Teknologi', 'AI', 'Reka Bentuk'],
  ['技术', '人工智能', '设计'],
  ['Technologie', 'KI', 'Kunst'],
  ['Technology', 'AI', 'Design']
];

const ColorGradientGrid = () => {
  const [gradient] = useState(
    'linear-gradient(to bottom, black 0%, blue 50%, black 100%)'
  );

  return (
    <div
      style={{
        background: gradient,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        fontSize: '2em',
        gap: '5rem',
        padding: '5rem',
        color: 'white',
        textAlign: 'center'
      }}
    >
      {terms.flat().map((term, index) => (
        <div key={index}>
          {term}
        </div>
      ))}
    </div>
  );
};

export default ColorGradientGrid;