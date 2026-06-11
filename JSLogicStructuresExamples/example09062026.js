let marks = [50,40,30,80]



/*filter syntax 
arrayName.method()

Store the result 
declare a variable that stores the array method performed on the arrray
eg: 

filter()
filter(function(item){
return something})

let filteredMark = marks.filter(function(mark){
return mark =>50)}

*/

//Apply filter here 
// This is how you can use filter for this purpose but it's an abuse of it
// Filter is to return specific values that match a condition

/*marks.filter(function(mark){
if(mark>=50){

    console.log("fail")
}
else{
    console.log("pass")
}
})
*/


// Syntax for a basic for loop

/*
start with keyword "for"
for(declare a counter variable ; specify range coutervariable<range;increment){
action
}
eg : 


for(var i; i < marks.length; i++ ){


if(marks[i]>=50){

    console.log("fail")
}
else{
    console.log("pass")
}
}
}

*/

// The forEach Loop

// Syntax : 

/*
Say to yourself "For Each item in the array, do something"

arrayName.forEach(function(item){
do something
})
*/



marks.forEach(function(mark){
    console.log(mark)
} )

/*marks is the name of the array
forEach() is the builtin array method which functions like a for loop
marks.forEach() - Go through every item in the marks array
function(mark)  - Javascript places a value for the perimeter called mark, here the 
value of the array is extracted for you, you don't need to use box notation, no need
for marks[mark]
console.log prints the value of the index not the index.
*/

//Activity: Print pass or fail for the marks array using the foreach loop

/*
How forEach works : 
forEach() takes a function as an argument. It then calls that function once for 
every item in the array, passing the current item into the function's parameter.

"
forEach(parameters)
forEach is a built in function that takes in a function 

function(mark){
reference mark because that is the parameter of the working function in the forEach loop
  }
"
*/



// includes is a built in array method , you use to check if array values contain an item
// specified item

// syntax : arrayName.includes("Value/letter")

names = ["Londeka", "Clinton Khoza", "Devania Chetty"]

let withLetterE = names.includes("Clinton")

console.log(withLetterE)

// find() 

// Built in array methods that returns a value using a specified item 

let findValue = names.find(function(name){
    return name.includes("Clinton")
}
)

console.log(findValue)


// Array methods can be classified in category 
/*
1. Methods for sorting / arranging data eg: sort()
2. Methods for selecting data using a condition : filter()
3. Methods for changing array items : Map()
4. Methods that combine array items into one value : reduce()
5. Array methods for checking if a value can be found in an array : includes
6. Methods that select a specific value : find()
*/