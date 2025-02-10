import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <>
      <div
        className={`font-roboto w-screen h-screen flex flex-col items-center ${
          isDarkMode ? "bg-[var(--dark-body-bg)]" : "bg-[var(--body-bg)]"
        }`}
      >
        <div className="w-11/12 mt-6 lg:w-2/3 lg:mt-12">
          <Header
            darkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          />

          <Search darkMode={isDarkMode} />
        </div>
      </div>
    </>
  );
}

export default App;
