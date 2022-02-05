import React, { useState } from "react";
import Top from "./components/Top";
import Screen from "./components/Screen";
import Key from "./components/Key";
import "./style.css";

export const ThemeContext = React.createContext();

function App() {
  const [theme1, setTheme1] = useState(true);
  const [theme2, setTheme2] = useState(false);
  const [theme3, setTheme3] = useState(false);
  const [ans, setAns] = useState("");
  const [screen, setScreen] = useState([]);

  return (
    <>
      <ThemeContext.Provider
        value={{
          theme1,
          setTheme1,
          theme2,
          setTheme2,
          theme3,
          setTheme3,
          screen,
          setScreen,
          ans,
          setAns,
        }}
      >
        <div
          style={{
            backgroundColor: theme1
              ? "hsl(222, 26%, 31%)"
              : theme2
              ? "hsl(0, 0%, 90%)"
              : theme3
              ? "hsl(268, 75%, 9%)"
              : null,
              transition:'1s'
          }}
          className='body'
        >
          <main className='container'>
            <Top />
            <Screen />
            <div
              style={{
                backgroundColor: theme1
                  ? "#252D44"
                  : theme2
                  ? "#D3CDCD"
                  : theme3
                  ? "#1E0836"
                  : null,
              transition:'1s'
              }}
              className='keys'
            >
              <Key value='7' />
              <Key value='8' />
              <Key value='9' />
              <Key value='DEL' />
              <Key value='4' />
              <Key value='5' />
              <Key value='6' />
              <Key value='+' />
              <Key value='1' />
              <Key value='2' />
              <Key value='3' />
              <Key value='-' />
              <Key value='.' />
              <Key value='0' />
              <Key value='/' />
              <Key value='*' />
              <Key value='RESET' />
              <Key value='=' />
            </div>
          </main>
          <div className='attribution'>
            Challenge by{" "}
            <a href='https://www.frontendmentor.io?ref=challenge'>
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href='https://www.frontendmentor.io/profile/Glory135'>Glory</a>.
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
