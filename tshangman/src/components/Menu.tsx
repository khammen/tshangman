import React, { useState } from 'react';
import { Button,  } from 'react-bootstrap';
//props: {setGuessedLetters: (newlets: string)=>void}

export function Menu({lossLevel, setLossLevel, guessedLetters, setGuessedLetters, hiddenWord, setHiddenWord, blanks, setBlanks}: 
  {lossLevel: number, setLossLevel: (badGuesses: number)=>void,
    guessedLetters: string, setGuessedLetters: (newLetterList: string)=>void,
    hiddenWord: string, setHiddenWord: (newWord: string)=>void,
    blanks: string, setBlanks: (newBlanks: string)=>void}): JSX.Element{
    
    const [entryBoxText, setEntryBoxText] = useState<string>('');
    

    function resetGame(): void{
      setLossLevel(0);
      setGuessedLetters('');
      setHiddenWord('');
      const tempWord = window.prompt("Enter a word for someone else to guess:");
      setHiddenWord(tempWord as string);
      setBlanks('');
      initializeBlanks();
    }
    function guessBox(boxText: string){
      if (hiddenWord.includes(entryBoxText)){
        displayBlanks(hiddenWord, entryBoxText);
      } else {
        setGuessedLetters(guessedLetters + entryBoxText);
        setLossLevel(lossLevel+1);
      }
      setEntryBoxText('');
    }
    function displayBlanks(hiddenWord: string, entryBoxText: string): void{
      let tempString = '';
      for (let i=0; i<hiddenWord.length; i++){
          if (hiddenWord[i]==entryBoxText[0]){
            tempString = tempString + entryBoxText[0] + "  ";
          } else {
            if (hiddenWord[i]==blanks[(3*i)]){
              tempString = tempString + hiddenWord[i] + "  ";
            } else {
              tempString = tempString + "_  ";
            }
          }
      }
      setBlanks('');
      setBlanks(tempString);
    }
    function initializeBlanks(){
      let temp = '';
      for (let i=0; i<hiddenWord.length; i++){
        temp = temp + "_  ";
      }
    }

    return <div>
    <input
        type="textbox"
        name="Enter a letter to guess:"
        value={entryBoxText}
        onChange={(e)=>{setEntryBoxText(e.target.value)}}
      />
      <Button onClick= {()=> guessBox(entryBoxText)}>Submit</Button>
  <Button onClick= {()=> resetGame()}>New Game</Button>
  </div>
}