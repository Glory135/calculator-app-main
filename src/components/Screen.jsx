import { useContext } from "react";
import { Theme_context } from "../App";
import "../style.css";

function Screen() {
  const { theme1, theme2, theme3, screen, ans, setAns } =
    useContext(Theme_context);
  const arrshow = screen.toString();
  setAns(arrshow.replace(/,/g, ""));
  console.log(screen);
  console.log(ans);
  return (
    <div>
      <h1
        style={{
          backgroundColor: theme1
            ? "hsl(224, 36%, 15%)"
            : theme2
            ? "hsl(0, 0%, 93%)"
            : theme3
            ? "hsl(268, 71%, 12%)"
            : null,
          color:
            ans && screen === "ERROR"
              ? "red"
              : theme1
              ? "white"
              : theme2
              ? "hsl(60, 10%, 19%)"
              : theme3
              ? "hsl(52, 100%, 62%)"
              : null,
        }}
        id='screen'
      >
        {ans}
      </h1>
    </div>
  );
}

export default Screen;
