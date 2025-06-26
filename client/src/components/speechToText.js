import React, { useState } from "react";

export const SpeechToText = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    // Check if browser supports SpeechRecognition
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("SpeechRecognition is not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    // Configure recognition options
    recognition.lang = "en-US"; // Set language
    recognition.interimResults = false; // Only finalize results
    recognition.continuous = false; // Stop after one phrase

    // Start recognition
    recognition.start();
    setIsListening(true);

    // Capture recognized speech
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript; // Get the spoken text
      setText(transcript); // Update state with recognized text
    };

    // Handle errors
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("An error occurred: " + event.error);
    };

    // Stop listening when recognition ends
    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div>
      <h1>Speech to Text Example</h1>
      <button onClick={startListening} disabled={isListening}>
        {isListening ? "Listening..." : "Start Listening"}
      </button>
      <p>
        <strong>Recognized Text:</strong> {text || "No speech detected yet."}
      </p>
    </div>
  );
};