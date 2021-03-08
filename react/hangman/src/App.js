import React, { useState, useEffect, useCallback } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const wordList = ["array", "object", "character"].map((word) =>
  word.toUpperCase()
);

function App() {
  const [hasWon, setHasWon] = useState(false);
  const [display, setDisplay] = useState("");
  const [guessed, setGuessed] = useState([]);
  const [word, setWord] = useState(getWord());
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => {
    updateState({});
  }, []);

  function getWord() {
    console.log("getWord");
    let x = Math.floor(Math.random() * wordList.length);
    return wordList[x];
  }

  useEffect(() => {}, [display, guessed]);

  // console.log(getWord())

  // const handleCharClick = () => {
  //   let temp = [...guessed, key]
  //   showWord();
  // }

  const showWord = () => {
    // let show = word
    //   .split("")
    //   .map((char) => (guessed.includes(char) ? `${char} ` : "__ "))
    //   .join("");
    // const show = "__ __ __ __ __";
    // console.log("show", show);
    setDisplay(
      word
        .split("")
        .map((char) =>
          Array.from(guessed).includes(char) ? `${char} ` : "__ "
        )
        .join("")
    );
    forceUpdate();
  };

  const handleNewClick = () => {
    console.log("handleNewClick");
    setGuessed([]);
    getWord();
    showWord();
  };

  return (
    <div className="App">
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0 20px 10px 0;
          border: 1px solid black;
        `}
      >
        <h1
          css={css`
            padding: 0 15px;
          `}
        >
          TIC TAC TOE
        </h1>
        <button
          css={css`
            font-size: 20px;
          `}
          type="text"
          onClick={handleNewClick}
        >
          <strong>NEW GAME</strong>
        </button>
      </div>

      <body
        css={css`
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          text-align: center;
          margin: 20px 0 0 0;
          height: 300px;
          border: black 1px solid;
        `}
      >
        <div>IMAGE HERE</div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          `}
        >
          <div>{display}</div>
          <div
            css={css`
              width: 350px;
              text-align: center;
            `}
          >
            {alphabet.map((letter) => {
              return (
                <button
                  type="text"
                  css={css`
                    width: 50px;
                    height: 30px;
                    text-align: center;
                    font-size: 20px;
                  `}
                  onClick={() => {
                    console.log("before set guessed");
                    let temp = new Set(guessed).add(letter);
                    console.log("after set guessed");
                    setGuessed(Array.from(temp));
                    showWord();
                  }}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
