import { useContext } from "react";
import { Theme_context } from "../App";

function Key({ value }) {
  let key = "";
  const { theme1, theme2, theme3, screen, setScreen, ans, setAns } =
    useContext(Theme_context);

  if (value === "DEL") {
    theme1
      ? (key = "key key1 del1")
      : theme2
      ? (key = "key key2 del2")
      : theme3
      ? (key = "key key3 del3")
      : null;
  } else if (value === "RESET") {
    theme1
      ? (key = "key key1 reset reset1")
      : theme2
      ? (key = "key key2 reset reset2")
      : theme3
      ? (key = "key key3 reset reset3")
      : null;
  } else if (value === "=") {
    theme1
      ? (key = "key key1 equal equal1")
      : theme2
      ? (key = "key key2 equal equal2")
      : theme3
      ? (key = "key key3 equal equal3")
      : null;
  } else {
    theme1
      ? (key = "key key1")
      : theme2
      ? (key = "key key2")
      : theme3
      ? (key = "key key3")
      : null;
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
