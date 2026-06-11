/*wants to identify learners who are eligible for an internship programme. 
Only learners with a mark of 75% or higher qualify.



Task:

Create a new array containing only the learners who qualify for the internship programme.
*/

// NAMEOFARRAY.method()
let marks = [68, 82, 91, 74, 88, 65];

let qualifyingLearners = 
marks.filter(function qualifiers(mark){
 if( mark >=75){
    return mark
 }
}
)

console.log(qualifyingLearners)


// A facilitator wants to award 10 bonus marks to every learner after completing an 
// extra-credit activity.

// Task:

// Create a new array showing each learner's updated mark after the bonus has been added.

let marks2= [55, 62, 48, 79, 85];

//nameofarray.method()
// 
const bonus= 10
//map(arguments : function(mark){return mark+10})
let transformedMarks =
marks2.map(function (mark, bonus)
  
    {
    return mark+bonus
}
)

console.log(transformedMarks)


/*
PC needs to calculate the overall attendance percentage accumulated by a class.


Task:

Calculate the total attendance percentage using an appropriate array method.
*/

let attendance = [80, 90, 75, 88, 95];

// reduce syntax

// nameofarray.reduce(function(value, sum){
//ccumulate the summ
// }
// )


let percentageAttendance = 

attendance.reduce(function(percentage, total){
   total = percentage + total
   return total
})/attendance.length

console.log(percentageAttendance+ "%")

/*A learner has forgotten whether the course "Cyber Security" 
is available in the training catalogue.


Task:

Determine whether the course "Cyber Security" exists in the catalogue.
*/

let courses = ["Software Development", "Data Analytics", "Cyber Security", "Cloud Computing"];
let courseAvailable = courses.includes("Cyber Security")

// print the message if includes returns true
if(courseAvailable == true){
    console.log("Yes the course is available")

}

/*
A facilitator wants to contact every learner individually about their assignment 
submission.


Task:

Display the following message for each learner:

Reminder sent to [Learner Name]
*/

let learners = ["Aobakwe", "Comfort", "Kagiso", "Olerato"];

learners.forEach(function(name){
    console.log("Reminder Sent To : " + name)
}
)

/*
Without using a loop, create a program that:

Finds all marks above 70.
Adds 5 marks to each of those learners.
Calculates the total of the updated marks.
Displays the final total.


Predict the final output before running the program.
*/

let marksThree = [45, 72, 88, 91, 67, 54, 79]
// Creating an array that has marks above 70
let aboveSeventy = marksThree.filter(function(mark){
    if (mark > 70){
        return mark
    }
}
)
// Adding the adjustment mark of + 5 to the array created in line 128
let updatedMarksAboveSeventy = aboveSeventy.map(function(mark){
    return mark + 5
}
)

// Calculating the total of the array in line 135
let totalUpdatedMarks = updatedMarksAboveSeventy.reduce(function(mark, sum){
   return sum+=mark
}
)

console.log("The total is : " + totalUpdatedMarks)