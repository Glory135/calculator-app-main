import { useContext } from "react";
import { ThemeContext } from "../App";

function Key({ value }) {
  let key = "";
  const { theme1, theme2, theme3, screen, setScreen, ans, setAns } =
    useContext(ThemeContext);

  if (value === "DEL") {
    if (theme1 === true) {
      key = "key key1 del1";
    } else if (theme2 === true) {
      key = "key key2 del2";
    } else if (theme3 === true) {
      key = "key key3 del3";
    } else {
      key = "";
    }
  } else if (value === "RESET") {
    if (theme1 === true) {
      key = "key key1 reset reset1";
    } else if (theme2 === true) {
      key = "key key2 reset reset2";
    } else if (theme3 === true) {
      key = "key key3 reset reset3";
    } else {
      key = "";
    }
  } else if (value === "=") {
    if (theme1 === true) {
      key = "key key1 equal equal1";
    } else if (theme2 === true) {
      key = "key key2 equal equal2";
    } else if (theme3 === true) {
      key = "key key3 equal equal3";
    } else {
      key = "";
    }
  } else {
    if (theme1 === true) {
      key = "key key1";
    } else if (theme2 === true) {
      key = "key key2";
    } else if (theme3 === true) {
      key = "key key3";
    } else {
      key = "";
    }
  }

  return (
    <button
      onClick={() => {
        if (value === "DEL") {
          setAns("");
          setScreen([]);
        } else if (value === "RESET") {
          setAns("");
          setScreen([]);
        } else if (value === "=") {
          try {
            const answer = eval(ans);
            setAns(answer);
            setScreen(answer);
          } catch (err) {
            console.log(err);
            setAns("ERROR!!");
            setScreen("ERROR!!");
          }
        } else {
          try {
            const newScreen = [...screen];
            newScreen.push(value);
            setScreen(newScreen);
          } catch (err) {
            console.log(err);
            setAns("ERROR!!");
            setScreen("ERROR!!");
          }
        }
      }}
      className={key}
    >
      {value}
    </button>
  );
}

export default Key;
