import searchIcon from "../assets/icons/search-icon.svg";

interface Search {
  darkMode: boolean;
}

const Search = ({ darkMode }: Search) => {
  return (
    <>
      <div
        className={`w-full mt-7 px-2 py-3 rounded ${
          darkMode ? "bg-[var(--dark-card-bg)] text-[var(--dark-text)]" : "bg-[var(--card-bg)] text-[var(--text)]"
        }`}
        style={{ boxShadow: "0px 20px 35px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex justify-between">
          <div className="flex items-center w-5/6">
            <div>
              <img src={searchIcon} alt="search Icon" className="w-5"/>
            </div>
            <div className="w-full">
              <input
                className={`border-0 outline-0 pl-2 text-sm w-full placeholder-[#697C9A]`}
                placeholder="Search Github username..."
                name="searchInput"
                id="searchInput"
              />
            </div>
          </div>
          <button className="bg-[var(--primary-color)] rounded-lg text-white px-3 py-1">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
