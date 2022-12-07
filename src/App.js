import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [dob, setDob] = useState("");
  const [luckyNo, setLuckyNo] = useState("");
  const [amILucky, setAmILucky] = useState(
    "Enter the values and Click the button"
  );
  function dobHandler() {
    let dateInput = event.target.value;
    dateInput = dateInput.replaceAll("-", "");
    let dateSum = 0;
    for (let i = 0; i < dateInput.length; i++) {
      dateSum += Number(dateInput[i]);
    }
    setDob(dateSum);
  }
  function luckyNoHandler() {
    let luckyNoInput = Number(event.target.value);
    setLuckyNo(luckyNoInput);
  }
  function luckyOrNot() {
    if (dob % luckyNo === 0) {
      setAmILucky("Looks like you are lucky indeed.");
    } else {
      setAmILucky("Looks like it ain't lucky for you.");
    }
  }

  return (
    <div className="App">
      <h1>Is Your Birthday Lucky</h1>
      <h2>Well? Do you feel lucky?</h2>
      <label htmlFor="dob">Enter your Birthday: </label>
      <input id="dob" type="date" onChange={dobHandler} />
      <label htmlFor="lucky-no">And what's your lucky number? </label>
      <input id="lucky-no" type="number" onChange={luckyNoHandler} />
      <h4>Well let's find out then:</h4>
      <button onClick={luckyOrNot}>Am I Lucky?</button>
      <div className="am-i-lucky">{amILucky}</div>
    </div>
  );
}
