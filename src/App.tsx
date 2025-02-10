import { useState } from "react"
import Header from "./components/Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  return (
    <>
      <div className={`font-roboto w-screen h-screen flex flex-col items-center ${isDarkMode ? 'bg-[var(--dark-body-bg)]' : 'bg-[var(--body-bg)]'}`}>
        <Header/>
      </div>
    </>
  )
}

export default App
