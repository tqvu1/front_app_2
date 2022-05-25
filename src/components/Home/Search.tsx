import qs from "query-string";
import React from "react";
import {useHistory} from "react-router";
import useQueryUrl from "../../hooks/useQueryUrl";

const Search: React.FC = () => {
  const history = useHistory();
  const query = useQueryUrl<{ name?: string }>();
  const handleSearch = () => {
    history.push({
      search: qs.stringify(
        { ...query },
        { skipNull: true, skipEmptyString: true },
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