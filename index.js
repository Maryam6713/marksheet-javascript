//---------------------------------------------------------------//
//--------------My--Result MarkSheet----------------//
//---------------------------------------------------------------//


//Define total marks for each subject
var mathTotal = 100; 
var engTotal = 100;
var urduTotal = 100;




// Define marks for each subject
var mathematics = 85;
var english= 90;
var urdu = 95;

//calculat total marks
var totalMarks = mathematics + english + urdu;


// Calculate percentage
var totalSubjects = 3;
var percentage = (totalMarks / (totalSubjects * 100)) * 100;

// Assign grade
var grade = "Fail";
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
}

// Display marksheet
console.log("---------------------");
console.log("--Student Marksheet--");
console.log("---------------------");
console.log("----Total Marks----")
console.log("Mathematics:" + mathTotal)
console.log("English:" + engTotal)
console.log("Urdu:" + urduTotal)
console.log("---------------------")
console.log("----Obtained Marks-------")
console.log("-----------------------")
console.log("Mathematics:" + mathematics);
console.log("English:" + english);
console.log("Urdu:" + urdu);
console.log("---------------------");
console.log("Total Marks:" + totalMarks);
console.log("Percentage is :" + percentage + "%");
console.log("Your Grade is:" + grade);
console.log("Congratulation! your percentage is " + percentage + " and your grade is " + grade );