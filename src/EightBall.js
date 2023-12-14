import React, {useState } from 'react';
import './EightBall.css';



function EightBall({answers}) {
  const [color, setColor] = useState('black');
  const [msg, setMsg] = useState('Think of a Question');
  const [shaken, setShaken] = useState(false);
  const shakeEightBall = () => {
    const randomAnswerIdx = Math.floor(Math.random() * answers.length) + 1;
    const answer = answers[randomAnswerIdx];
    setColor(answer.color);
    setMsg(answer.msg);
    setShaken(true);
  }

  const resetEightBall = () => {
    setColor('black');
    setMsg('Think of a Question');
    setShaken(false);
  }
  const backgroundColor = {backgroundColor: color};

  return (
    <>
      <div className="EightBall" onClick={shaken ? null : shakeEightBall} style={backgroundColor}>
        <p>{msg}</p>
      </div>
      {shaken && <button onClick={resetEightBall}>Reset</button>}
    </>
    
  )
}

export default EightBall;