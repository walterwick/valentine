import { useState } from "react";
import "./App.css";

const phrases = [
  "No 🙉",
  "Are you sure?",
  "Really Sure😢",
  "I'll be very sad😕",
  "Pookie Please🥺",
  "Don't do this to me🫤",
  "I'm gonna cry..😭",
  "You are breaking my heart😭💔",
  "Think again!💔",
  "Last chance!😭",
  "Surely not?🥺",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?🥺",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
  "Is that your final answer?🫤",
  "You're breaking my heart ;(",
  "Plsss? :( You're breaking my heart🫤",
];


function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 2 + 16;

  function handleYesClick() {
    setYesPressed(true);
  }
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bear-Kissing"
          />
          <div className="text">Yayyy !!!</div>
<iframe
  src="https://14ft.vercel.app/"
  height="0"
  width="0"
  frameborder="0"
  title="14ft.vercel.app sitesine erişen iframe" // Burada title eklendi
></iframe>

        </>
      ) : (
        <>
          <img
            className="kiss"
            src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif"
            alt="bear with heart"
          />
          <div className="text">Will you be my valentine 🌹?</div>
          <div className="both-Button">
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "green", //değiştirdiğim yer renk için
              }}
              onClick={handleYesClick}
            >
              Yes 🙈
            </button>
            <button
              className="NoButton"
              style={
                {
                  /* color: "black", backgroundColor: "white"  */
                }
              } /* içine koyulablir */ //color: "black", backgroundColor: "white"
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
