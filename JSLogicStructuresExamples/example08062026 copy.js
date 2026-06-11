// Creating a js function that has decicion trees and takes in inputs

// declare function called area_weather that takes in a user input and tells
// the user if it's hot  cold or warm

// PROMPT is JS function for user inputs
// Using prompt in JavaScript: 

import PromptSync from "prompt-sync"

let prompt = PromptSync()
// OR const prompt = require("prompt-sync")()


function area_weather(){
 /* area_weather takes in user inputs, so any numbers - or positive
  Line  takes in a user input called  temperature, since we want a number, we will wrap 
  the prompt function with a Number() function in JS, this function
  converts the data type into an integer
  when temperature is < 0, the output "Extremely cold"
  when temperature is < 30 , the output "It is warm"
  when temperature > 30 , the output "It is hot"

  */
 let temperature = Number(prompt("Enter the temperature")) 
 // Function is going to check if the input is <0
 if(temperature < 0){
    console.log("Extremely cold")
 }

else if(temperature < 30){
    console.log("It is warm")
} 
else if(temperature >= 30){
    console.log("It is hot")
 }

}

area_weather()