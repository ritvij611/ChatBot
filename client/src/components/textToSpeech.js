import React from "react";

export const SpeakText = ({ textData }) => {
  const speakText = () => {
    if (!textData) {
      alert("Please provide some text.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textData);

    // Set voice options (optional)
    utterance.rate = 1; // Speed: 0.1 (slow) to 10 (fast)
    utterance.pitch = 1; // Pitch: 0 (low) to 2 (high)

    // Speak the text
    window.speechSynthesis.speak(utterance);
  };

  const speechStop = () =>{
    window.speechSynthesis.cancel();
  }

  return (
    <div>
    <button onClick={speakText}>
      Speak
    </button>
    <button onClick={speechStop}>
        Stop
    </button>
    </div>
  );
};
