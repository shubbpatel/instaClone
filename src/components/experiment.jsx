import React, { useState } from 'react';

export default function SearchBox() {
  const [showSearch, setShowSearch] = useState(false);

  function toggleSearch() {
    setShowSearch(!showSearch);
  }

  return (
    <div style={{ display: 'flex',
    
    }}>
      <button onClick={toggleSearch}>Search</button>
      {showSearch && (
        <div style={{ 
          position: 'relative', 
          left:'3rem',

          top: 0, 
          left: 0, 
          height: '90vh', 
          width: '30%', 
          backgroundColor: 'white',
          zIndex: 1, 
          transition: 'transform 0.3s ease-in-out', 
          transform: 'translateX(0%)'
        }}>
          <input type="text" placeholder="Search" />
        </div>
      )}
    </div>
  );
}
