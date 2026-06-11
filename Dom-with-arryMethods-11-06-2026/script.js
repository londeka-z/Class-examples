//Fetch HTML Elements Using a selector
// Create a variable to store the element 
// Make sure that your variables and function names are different 
// use inpuytElement , listElement, etc for the variables
const input = document.getElementById("enter-mark");
const list = document.getElementById("student-marks");
const avgMark = document.getElementById("average");
const highstMark = document.getElementById("highest");
const addMarkElement = document.getElementById("add-mark")

// Calculating the average mark of a list 

// Is an empty instance of the marks array because we are using an input element
const marks = [];

function averageMark(){
 // use reduce to get the total and divide by marks.length
 let average  = 
 marks.reduce(function (mark, total) {
    return total+=mark
 })/ marks.length ; 

 // Here we are populating tha average marg paragraph with the calculated average
avgMark.innerHTML = average
 return average

}

function highestMark(){
    // To get the highest mark you can sort in descending order and take out
    // the first element/value

  let sorted = marks.sort(function(a,b){
    return b-a
  })
// The function highestMark returns the first value
  highstMark.innerHTML = sorted[0]
  return sorted[0]
}

// The add mark function is our event handler , so we must connect all functionalities 
// in it. 
// Make sure that your functions are in the right order 

function addMark(){
 let mark = Number(input.value)
 marks.push(mark)
 input.value = ""

 // We want to see the average and the highest mark when we are adding the 
// individual mark inputs 
populateList()
averageMark()
highestMark()

}

function populateList(){
    list.innerHTML = ""
  marks.forEach(function(mark){
    const li = document.createElement("li")
    // Here we are saying in between <li></li> add this content
    li.innerHTML = mark
    // Now we are saying the ul element in the html must add each and 
    // every li input must be added in the ul element that we have 
    list.appendChild(li)
  }
)
}



// To add an event listener you must call the addEventListener function which uses the 
// element you want to add the event to and it takes in the event type and action 
// as arguments

addMarkElement.addEventListener("click", addMark)