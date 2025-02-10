import sunIcon from "../assets/icons/sun-icon.svg";
import moonIcon from "../assets/icons/moon-icon.svg";

interface Header {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: Header) => {
  return (
    <>
      <div className="h-9 flex justify-between items-center">
        <p className={`font-bold text-xl ${darkMode ? 'text-[var(--dark-text)]' : 'text-[var(--text)]'}`}>Github Profile Finder</p>
        <button
          onClick={toggleDarkMode}
          className={`cursor-pointer flex gap-2 items-center text-sm ${darkMode ? 'text-white' : 'text-[#697C9A]'}`}
        >
          {darkMode ? "LIGHT" : "DARK"}
          <img
            src={darkMode ? sunIcon : moonIcon}
            alt="sun icon"
            className="h-4 "
          />
        </button>
      </div>
    </>
  );
};

export default Header;
