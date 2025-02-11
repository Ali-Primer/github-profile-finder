import { useRef } from "react";
import searchIcon from "../assets/icons/search-icon.svg";

interface Search {
  darkMode: boolean;
  searched: (value: string) => void;
}

const Search = ({ darkMode, searched }: Search) => {
  const searchRef = useRef<string>("");

  return (
    <>
      <div
        className={`w-full mt-7 px-2 py-3 rounded-xl ${
          darkMode
            ? "bg-[var(--dark-card-bg)] text-[var(--dark-text)]"
            : "bg-[var(--card-bg)] text-[var(--text)]"
        }`}
        style={{ boxShadow: "0px 10px 20px 1px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="flex justify-between">
          <div className="flex items-center w-5/6">
            <div>
              <img src={searchIcon} alt="search Icon" className="w-5" />
            </div>
            <div className="w-full">
              <input
              // save to searchRef
                onChange={(event) => (searchRef.current = event.target.value.trim())}
                className={`border-0 outline-0 pl-2 text-sm w-full placeholder-[#697C9A]`}
                placeholder="Search Github username..."
                name="searchInput"
                id="searchInput"
              />
            </div>
          </div>
          <button
          // send to upper coponent
            onClick={() => searched(searchRef.current)}
            className="bg-[var(--primary-color)] rounded-lg cursor-pointer text-white px-3 py-1"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
