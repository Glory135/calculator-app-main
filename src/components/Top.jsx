import React, { useContext } from "react";
import { Theme_context } from "../App";

function Top() {
  const { theme1, theme2, theme3, setTheme1, setTheme2, setTheme3 } =
    useContext(Theme_context);

  const click1 = () => {
    setTheme1(true);
    setTheme2(false);
    setTheme3(false);
  };
  const click2 = () => {
    setTheme1(false);
    setTheme2(true);
    setTheme3(false);
  };
  const click3 = () => {
    setTheme1(false);
    setTheme2(false);
    setTheme3(true);
  };

  return (
    <div
      style={{
        color: theme1
          ? "white"
          : theme2
          ? "black"
          : theme3
          ? " hsl(52, 100%, 62%)"
          : null,
      }}
    >
      <div className='top'>
        <h3 id='calc'>calc</h3>
        <div className='radio'>
          <div id='i1'>THEME</div>
          <div className='themes'>
            <div className='theme-nums'>
              <div onClick={click1} className='theme-num theme-1'>
                1
              </div>
              <div onClick={click2} className='theme-num theme-2'>
                2
              </div>
              <div onClick={click3} className='theme-num theme-3'>
                3
              </div>
            </div>
            <div
              style={{
                backgroundColor: theme1
                  ? "#252C46"
                  : theme2
                  ? "#D4CCCE"
                  : theme3
                  ? "#1E0836"
                  : null,
              }}
              className='theme-balls-container'
            >
              <div
                onClick={click1}
                className={
                  theme1 ? "theme-ball ball-1 active" : "theme-ball ball-1"
                }
              ></div>
              <div
                onClick={click2}
                className={
                  theme2 ? "theme-ball ball-2 active" : "theme-ball ball-2"
                }
              ></div>
              <div
                onClick={click3}
                className={
                  theme3 ? "theme-ball ball-3 active" : "theme-ball ball-3"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
