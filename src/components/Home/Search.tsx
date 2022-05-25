import qs from "query-string";
import React from "react";
import {useNavigate} from "react-router-dom";

const Search: React.FC = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate({
      search: qs.stringify(
        {
          param1: 'test1',
          param2: 'test2',
        },
      ),
    });
  };
  return (
    <div>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search;