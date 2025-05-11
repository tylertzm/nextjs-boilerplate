import React from "react";

interface LogoMarqueeProps {
  logos: string[];
  size: number;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos = [], size = 100 }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-start space-x-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            style={{
              width: `${4 * size}px`, // The width is 4 times the size
              height: `${size}px`, // The height is the size
              alignItems: 'center', // To vertically align the images in the center of the container
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;