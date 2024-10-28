import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/solid';

const Rating = ({ initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleMouseEnter = (value) => {
    setRating(value);
  };

  const handleMouseLeave = () => {
    setRating(initialRating);
  };

  const handleClick = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            {starValue <= rating ? (
              <SolidStarIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <StarIcon className="h-6 w-6 text-gray-400" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Rating;