import React, { useState } from 'react';
import { letterDisplay } from '../interfaces/letterDisplay';

export function WordProgress({guessedLetters, hiddenWord, setHiddenWord, blanks, setBlanks}:
     {guessedLetters: string, hiddenWord: string, setHiddenWord: (newWord: string)=>void,
        blanks: string, setBlanks: (newBlanks: string)=>void}): JSX.Element{
    
/*
    function displayBlanks(hiddenWord: string, guessedLetters: string): string{
        let displayLetter = false;
        for (let i=0; i<hiddenWord.length; i++){
            for (let j=0; j<guessedLetters.length; i++){
                if (hiddenWord[i]==guessedLetters[j]){
                    displayLetter=true;
                }
            }
            if (displayLetter){
                setBlanks(blanks + hiddenWord[i] + "  ");
            } else {
                setBlanks(blanks + "_  ");
            }
        }
        return blanks;
    }*/

    return <div>
        <h1>Letters Guessed:</h1>
        <div><strong>Guessed Letters:</strong> {guessedLetters}</div>
        <div><strong>Word Progress:</strong></div>
        <h2><strong>{blanks}</strong></h2>
    </div>
}

