import React, { useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import Confetti from 'react-dom-confetti';
import './App.css';
import './Bg.css';
import Popup from './Popup';

export default function App() {
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
    "asd",
    "sefsef",
    "sedfsef",
    "sfsf",
    "adesdfe"
  ];

  const segColors = [
    "#001f3f",
    "#ffdc00",
    "#2ecc40",
    "#ff6f61",
    "#9b59b6",
    "#2ecc40",
    "#e74c3c",
    "#00b5cc",
    "#ff851b",
    "#0074d9"
  ];

  const [confetti, setConfetti] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const onFinished = (winner) => {
    console.log(winner);
    setConfetti(true); // Activate confetti animation when the spin is done
    setPopupOpen(true); // Open the pop-up when the wheel stops
    const closePopup = () => {
      console.log('Closing the pop-up');
      setPopupOpen(false);
    };
  };

  const closePopup = () => {
    setPopupOpen(false); // Close the pop-up
  };

  return (
    <div className="app-container">
      <div className="background-image"></div>
      <div className="App">
        <div className="wheel-container">
          <div className="wheel">
            <WheelComponent
              segments={segments}
              segColors={segColors}
              onFinished={onFinished}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={true}
              size={295}
              upDuration={500}
              downDuration={600}
              fontFamily="Arial"
            />
          </div>
          <div className="confetti">
            <Confetti active={confetti} config={{ angle: 90, spread: 360, startVelocity: 120, elementCount: 4000, position: 'fixed', origin: { x: 0.1, y: 0.5 } }} />
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} /> {/* Render the Popup component conditionally */}
    </div>
  );
}
