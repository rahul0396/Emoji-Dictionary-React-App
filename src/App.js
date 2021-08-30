import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "🤨": "Face with Raised Eyebrow",
  "😀": "Grinning Face",
  "😜": "Winking Face with Tongue",
  "🍫": "Choclate",
  "👿": "Angry Face",
  "🤝": "Handshake",
  "👍": "Thumbs Up",
  "🎂": "Birthday Cake",
  "🙏": " Folded Hands",
  "🥰": "Smiling Face with Hearts",
  "😱": "Face Screaming in Fear",
  "🔥": "Fire"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = " We don't have this in our database😅";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }



  return (
    <div className="App">
      <nav>
        <h1>Emoji Dictionary</h1>
      </nav>
      <div className="para">
        
        <p>
          It is an emoji dictionary app where in you can enter the emoji and it
          will interpret its meaning.
        </p>
      </div>

      <input
        placeholder="Enter your emoji here"
        onChange={emojiInputHandler}
      ></input>
      <div className="meaning">{meaning}</div>
      <div>
        <p>Emojis we Know</p>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}