import { useContext } from "react";
import { ThemeContext } from "../App";

function Key({ value }) {
  let key = "";
  const { theme1, theme2, theme3, screen, setScreen } =
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
        const newScreen = [...screen];
        if (value === "DEL") {
          setScreen(screen.slice(0, screen.length - 1));
        } else if (value === "RESET") {
          setScreen([]);
        } else if (
          value === "=" ||
          value === "+" ||
          value === "-" ||
          value === "*" ||
          value === "/"
        ) {
          try {
            const str = newScreen.toString().replace(/,/g, "");
            let arr = [];
            if (str.includes("+")) {
              arr = str.split("+");
            } else if (str.includes("-")) {
              arr = str.split("-");
            } else if (str.includes("*")) {
              arr = str.split("*");
            } else if (str.includes("/")) {
              arr = str.split("/");
            } else {
              console.log("error");
            }
            if (arr.length >= 2) {
              const newArr = arr.map((i) => parseInt(i));
              if (screen.includes("+")) {
                const answer = newArr[0] + newArr[1];
                if (value === "+") {
                  setScreen([answer, "+"]);
                } else if (value === "-") {
                  setScreen([answer, "-"]);
                } else if (value === "*") {
                  setScreen([answer, "*"]);
                } else if (value === "/") {
                  setScreen([answer, "/"]);
                } else {
                  setScreen([answer]);
                }
              } else if (screen.includes("-")) {
                const answer = newArr[0] - newArr[1];
                if (value === "+") {
                  setScreen([answer, "+"]);
                } else if (value === "-") {
                  setScreen([answer, "-"]);
                } else if (value === "*") {
                  setScreen([answer, "*"]);
                } else if (value === "/") {
                  setScreen([answer, "/"]);
                } else {
                  setScreen([answer]);
                }
              } else if (screen.includes("*")) {
                const answer = newArr[0] * newArr[1];
                if (value === "+") {
                  setScreen([answer, "+"]);
                } else if (value === "-") {
                  setScreen([answer, "-"]);
                } else if (value === "*") {
                  setScreen([answer, "*"]);
                } else if (value === "/") {
                  setScreen([answer, "/"]);
                } else {
                  setScreen([answer]);
                }
              } else if (screen.includes("/")) {
                const answer = newArr[0] / newArr[1];
                if (value === "+") {
                  setScreen([answer, "+"]);
                } else if (value === "-") {
                  setScreen([answer, "-"]);
                } else if (value === "*") {
                  setScreen([answer, "*"]);
                } else if (value === "/") {
                  setScreen([answer, "/"]);
                } else {
                  setScreen([answer]);
                }
              }
            } else {
              newScreen.push(value);
              setScreen(newScreen);
            }
          } catch (err) {
            console.log(err);
            setScreen("ERROR!!");
          }
        } else {
          try {
            newScreen.push(value);
            setScreen(newScreen);
          } catch (err) {
            console.log(err);
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
