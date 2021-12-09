import { useState } from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";

import "./Autocomplete.css";

const Autocomplete = () => {
  const [input, setInput] = useState();
  return (
    <div className="search-box">
      <IoIosSearch data-search />
      <input
        type="text"
        placeholder="Search items..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {input && <IoMdClose data-close onClick={() => setInput("")} />}
    </div>
  );
};

export default Autocomplete;
