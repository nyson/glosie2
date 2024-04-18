import React from 'react';
import Hiragana from './hiragana.js'

function randomQuestion() {
    keys = Object.keys(Hiragana)
    key = keys[Math.floor(keys.length * Math.random())]

    console.log(key, Hiragana[key])

    return Math.random() > 1 
        ? [key, Hiragana[key]]
        : [Hiragana[key], key]
}


export default App = () => {
    const [[question, guess], setWord] = React.useState(randomQuestion)
    const [showAnswer, setShowAnswer] = React.useState(false)
    const [correct, setCorrect] = React.useState(false)

    const newWord = e => {
        setShowAnswer(false);
        setCorrect(false)
        e.preventDefault();
        e.target.value = "";
        setWord(randomQuestion);
    }

    const handleKeypress = e => {
        switch(e.keyCode){
            case 13:
                newWord(e)
                break;
            // case 8:
            //     if (e.target.value === "") {
            //         console.log(e.target.value)
            //         setShowAnswer(true)
            //     }
            //     break;
            default:
                console.log(`unhandled keycode ${e.keyCode}`)
        }
    }



    return (<>
        <h1>Hell world!</h1>
        <span className="question">{question}</span>
        <br/>
        {showAnswer && <span>{guess}</span>}

        <br />
        <label htmlFor="guess">Enter guess...</label>
        <input 
            name="guess" 
            onChange={e => setCorrect(e.target.value === guess)}
            onKeyDown={handleKeypress}
            type="text"></input>

        <br />
        <button onClick={() => setShowAnswer(true)}>Show answer</button>
        <button onClick={newWord}>New question!</button>

        {correct && <h2>Correct!</h2>}
        
    </>)
}
