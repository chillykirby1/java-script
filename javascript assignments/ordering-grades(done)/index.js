//Variable is an array for security
const marks = [56, 89, 72]; //add grades as an array

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)
console.log ("My letter grade is", calculatedGrade (marks), "because my numerical average is", calculateAverage (marks));

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (grades) {
  const average = calculateAverage (grades);

  if (79 <= average)
  if (averge < 89)
  return 'B';

  if (69 <= average)
  if (average < 79)
  return 'C';

  if (60 <= average)
  if (average < 69)
  return 'D';

  if (0 < average)
  if (average < 59)
  return 'F';

  return 'A';
}
function calculateAverage (arrays) {
  let sum = 0;
  for (let array of arrays) sum += array; //Example of reading an array and one line to add up the sum of all the grades
  return sum / marks.length; //"Divide the total marks by the number of grades"
}
