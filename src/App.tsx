import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import InfoCard from "./components/InfoCard";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [searched, setSearched] = useState<string>("");

  return (
    <>
      <div
        className={`font-roboto w-screen h-screen flex flex-col items-center ${
          isDarkMode ? "bg-[var(--dark-body-bg)]" : "bg-[var(--body-bg)]"
        }`}
      >
        <div className="w-11/12 mt-6 md:w-md lg:mt-12">
          <Header
            darkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          />

          <Search darkMode={isDarkMode} searched={(e) => setSearched(e)} />

          <InfoCard darkMode={isDarkMode} userName={searched} />
        </div>
      </div>
    </>
  );
}

export default App;
