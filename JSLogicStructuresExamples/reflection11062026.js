/*raining centre is preparing a list of learners for a sponsored international 
internship programme. The centre only wants to consider learners who scored 65% or 
higher in their assessments. These learners will receive a 5-mark bonus for completing 
an additional project. After the bonus has been applied, only learners with a final mark 
of 80% or higher should remain on the shortlist. The centre then wants to display the 
shortlisted marks in descending order (highest to lowest) and calculate the average mark 
of the shortlisted learners. 
Create a JavaScript program that performs all these tasks without using any loops.*/


// Create a student list with the marks
 let students = [55,65,75,45,80,77,66,90]
// Filter student list for marks >= 65
let shortlistedPrem =  students.filter((student) => student >=65)
// Map filtered list by adding 5 points
let bonusPoints = shortlistedPrem.map((student) => student + 5)
// filter mapped list for mark >= 80 
let shortlistedFinal = bonusPoints.filter((student) => student >= 80)
// sort (b-a)
let highestToLowest = shortlistedFinal.sort( (a,b) => b-a)
// reduce filtered mapped list / list.length
let shortListAverage = highestToLowest.reduce((mark, sum) => sum=+mark)/highestToLowest.length

