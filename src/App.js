import { React, useState } from 'react';
import "./css/App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

function App() { 
  const [theme, setTheme] = useState("light");

  function changeTheme() { 
    setTheme(currentTheme => {
      const newTheme = (currentTheme === 'dark') ? "light" : "dark"
      return newTheme;
    });
  }

  return (
    <div className='App'>
      <Header theme={theme} callbacks={{ handleThemeButtonClick: changeTheme }} />
      <MainContent theme={theme }/>
    </div>
  );
}

export default App;
