import sunIcon from "../assets/icons/sun-icon.svg";
import moonIcon from "../assets/icons/moon-icon.svg";

interface Header {
  darkMode: boolean;
  toggleDarkMode : () => void;
}

const Header = ({ darkMode, toggleDarkMode }: Header) => {
  return (
    <>
      <div className="w-11/12 h-9 mt-6 flex justify-between items-center">
        <p className="font-bold text-xl">Github Profile Finder</p>
        <button onClick={toggleDarkMode} className="cursor-pointer flex gap-2 items-center text-sm text-[#697C9A]">
          {darkMode ? 'LIGHT' : 'DARK'}
          <img src={darkMode ? sunIcon : moonIcon} alt="sun icon" className="h-4 " />
        </button>
      </div>
    </>
  );
};

export default Header;
