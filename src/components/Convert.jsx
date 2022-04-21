import React, { useState, useEffect } from "react";
import googleTranslate from "../apis/googleTranslate";

export default function Convert({ text, language }) {
  const [translatedText, SetTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translateText = async () => {
      try {
        const { data } = await googleTranslate.post(
          "",
          {},
          {
            params: {
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
              },
          }
        );
        console.log(data);
        setDebouncedText(data.data.translations[0].translatedText);
      } catch (e) {
        console.log(e.message);
      }
    };
    if (debouncedText) translateText();
  }, [debouncedText,language]);

  return (
    <div style={{ marginTop: "10rem", paddingLeft: "2rem" }}>
      <h1>Output:</h1>
      <p>{debouncedText}</p>
    </div>
  );
}
