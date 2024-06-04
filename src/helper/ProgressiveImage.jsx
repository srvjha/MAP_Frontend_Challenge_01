import React, { useState } from 'react';

const ProgressiveImage = ({ lowResSrc, highResSrc, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="progressive-image">
      <img
        src={lowResSrc}
        alt={alt}
        className={`low-res ${loaded ? 'loaded' : ''}`}
      />
      <img
        src={highResSrc}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`high-res ${loaded ? 'loaded' : ''} transition-transform duration-300 transform hover:scale-105`}
      />
    </div>
  );
};

export default ProgressiveImage;
