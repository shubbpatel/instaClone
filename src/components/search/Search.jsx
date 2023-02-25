import React, { useState } from 'react';
import { Input, List } from 'antd';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const handleSearch = () => {
    setShowResults(true);
  }
  
  return (
    <div>
      <Input.Search
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {showResults && (
        <List
          dataSource={[searchTerm]}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      )}
    </div>
  );
}

export default Search;
