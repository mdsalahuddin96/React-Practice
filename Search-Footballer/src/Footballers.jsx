import { useEffect, useState } from "react"
import useDebounce from "./Hook/useDebounce"
export default function Footballers({footballers}){
    const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce(inputValue, 2000);

  return (
    <div>
        <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        placeholder="Player name"
        onChange={(e) => setInputValue(e.target.value)}
      />
     <h2>Search Result:</h2>
      <p>{footballers.find(footballer=>footballer.includes(debouncedValue))}</p>

    </div>
  );
}