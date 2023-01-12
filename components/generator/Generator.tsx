import React, { useState, useRef } from "react";
import { generate } from "@wcj/generate-password";

import c from "./generator.module.scss";

const Generator: React.FC = () => {
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numeric, setNumeric] = useState(false);
  const [special, setSpecial] = useState(true);
  const [length, setLength] = useState(20);
  const options = { lowerCase, upperCase, numeric, special, length };
  const [password, setPassword] = useState<string>(generate(options));

  const inputRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState<string>("");

  const generationHandler = () => {
    setCopySuccess("");
    if (!lowerCase && !upperCase && !numeric && !special) {
      setPassword("");
    } else {
      setPassword(generate(options));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopySuccess("Copied!");
  };

  return (
    <div className={c.generator}>
      <div className={c.container}>
        <div className={c.inputContainer}>
          <input
            type="text"
            max={20}
            value={password}
            ref={inputRef}
            disabled={true}
          />
          <button
            className={c.generate}
            onClick={() => generationHandler()}
          ></button>
        </div>
        <button className={c.copy} onClick={() => copyToClipboard()}>
          {copySuccess ? (
            "Copied!"
          ) : (
            <>
              Copy <span className={c.hidden}>Password</span>
            </>
          )}
        </button>
      </div>
      <div className={c.options}>
        <div className={`${c.option} ${c.reverse}`}>
          <input
            type="checkbox"
            name="lowerCase"
            checked={lowerCase}
            onChange={() => setLowerCase(!lowerCase)}
          />
          <label htmlFor="lowerCase">lower case</label>
        </div>
        <div className={c.option}>
          <input
            type="checkbox"
            name="upperCase"
            checked={upperCase}
            onChange={() => setUpperCase(!upperCase)}
          />
          <label htmlFor="upperCase">upper case</label>
        </div>
        <div className={`${c.option} ${c.reverse}`}>
          <input
            type="checkbox"
            name="special"
            checked={special}
            onChange={() => setSpecial(!special)}
          />
          <label htmlFor="special">special symbols</label>
        </div>
        <div className={c.option}>
          <input
            type="checkbox"
            name="numeric"
            checked={numeric}
            onChange={() => setNumeric(!numeric)}
          />
          <label htmlFor="numeric">numbers</label>
        </div>
      </div>
    </div>
  );
};

export default Generator;
