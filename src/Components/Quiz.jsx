import React, { useState } from 'react'
import Data from '../Data/Quizdatas';
import Audio from '../Audio/thinking-time-148496.mp3'
function Quiz() {
  // console.log(Data);
  const [questionIndex, setQuestionIndex] = useState(0)
  const currentQuestion = Data[questionIndex]
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const selectOption = (index) => {
    // console.log(index);
    if (currentQuestion.Answer == index) {
      // alert("Correct")
      setScore(score + 1)
    }
    // alert("Not Correct")
    const nextQ = questionIndex + 1
    if (nextQ < Data.length) {
      setQuestionIndex(questionIndex + 1)
    } else {
      // console.log('Done');
      setShowScore(true)
    }
  }
  return (
 
  
        <div className='container'>
          <h1>Quiz</h1>
          <audio src={Audio} type="audio/mp3" />
          {showScore ? (
            <p className='score'>
    
              <h1 >Your Score :  {score}</h1>
              <button className='btn' onClick={() => setShowScore(false)}>Reset Quiz</button>
            </p>
          ) : (
            <div className="question">
              <p>{currentQuestion.Question}</p>
              <div className="question-container">
                <ul className="question-ul">
                  {currentQuestion.Option.map((Option, i) => {
                    return <li className="question-li" onClick={() => selectOption(i)}>{Option}</li>
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>

  
  )
}

export default Quiz