import { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");

  const wordList = text.split(" ").filter((word) => word !== "");
  const words = wordList.length;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letters = 0;
  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text[i].toLowerCase())) {
      letters = letters + 1;
    }
  }

  const sentenceList = text.split(/[.!?]/).filter((s) => s.trim() !== "");
  const sentences = sentenceList.length;

  return (
    <div className="card">
      <h1>Word Counter</h1>

      <textarea
        className="textarea"
        placeholder="Start typing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="stats">
        <div className="stat">
          <p>Words</p>
          <h2>{words}</h2>
        </div>

        <div className="stat">
          <p>Letters</p>
          <h2>{letters}</h2>
        </div>

        <div className="stat">
          <p>Sentences</p>
          <h2>{sentences}</h2>
        </div>
      </div>
    </div>
  );
}