import React from 'react';
import { useState, useEffect } from 'react';
import { techstack } from '../data/techstack';

interface TechItem {
  image: string;
  description: string;
  name: string
}

interface SliderProps {
  items: TechItem[];
  speed?: number;
  direction: 'left' | 'right';
}

const Slider: React.FC<SliderProps> = ({ items, speed = 50, direction }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (direction === 'left') {
          return prevPosition > -100 ? prevPosition - 0.1 : 0;
        } else {
          return prevPosition < 0 ? prevPosition + 0.1 : -100;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed, direction]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-block"
        style={{
          transform: `translateX(${position}%)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {items.concat(items).map((item, index) => (
          <div key={index} className="inline-flex items-center justify-center rounded-xl gap-x-2 mx-4 bg-gray-100 p-3">
            <img
              src={item.image}
              alt={item.description}
              className="h-12 w-12 object-cover"
            />
            <div className=""> 
            <h1 className="text-xl font-bold">{item.name}</h1>
            <h1 className="text-[#8C8C8C]">{item.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DualSlider: React.FC = () => {
  const leftItems = techstack.slice(0, 4);
  const rightItems = techstack.slice(4);

  return (
    <div className="space-y-6">
      <Slider items={leftItems} direction="left" />
      <Slider items={rightItems} direction="right" speed={70} />
    </div>
  );
};

export default DualSlider;