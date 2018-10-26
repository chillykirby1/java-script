let number = [1, 20]; //Boundary Numbers
let skipCount = 1; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
let startingNumber = number[1]; //Hint: used in the FOR Loop
for (let i=0; i<=difference; i++){
  even = (startingNumber + skipCount) % 2;
  console.log("This number is", even+i, "; This iteration is number", i+skipCount); //Example of Concatenating
  let add = even + i;
  if (add =1,3,5,7,9,11,13,15,17,19) console.log("this number is odd");
  if (add =2,4,6,8,10,12,14,16,18,20) console.log("this number is even");
}
