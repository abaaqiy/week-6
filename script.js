
document.addEventListener('DOMContentLoaded', () => {
    
   
    document.getElementById('btn-task1').addEventListener('click', runTask1);
    document.getElementById('btn-task2').addEventListener('click', runTask2);
    document.getElementById('btn-task3').addEventListener('click', runTask3);
    document.getElementById('btn-task4').addEventListener('click', runTask4);
});

// --- TASK 1 ---
function runTask1() {
    console.log("--- TASK 1 START ---");
    
    
    let firstName = "Abdulbaaqiy";
    const lastName = "Shefiu";
    let age = 21;
    const studentId = "STU-0074";
    const gpa = 3.8;
    let isEnrolled = true;
    let graduationDate = new Date("2025-05-15");

    
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Age:", age);
    console.log("Student ID:", studentId);
    console.log("GPA:", gpa);
    console.log("Is Enrolled:", isEnrolled);
    console.log("Graduation Date:", graduationDate);

   
    firstName = "Abdulbaaqiy (a_baaqiy)";
    console.log("Updated First Name (Nickname):", firstName);
    
    console.log("--- TASK 1 END ---\n");
}

// --- TASK 2 ---
function runTask2() {
    console.log("--- TASK 2 START ---");
    
   
    let totalScore = 0;
    console.log("Step 1 - Initial Score:", totalScore);

    
    totalScore += 50;
    console.log("Step 2 - After first test (+45):", totalScore);

    totalScore += 20;
    console.log("Step 3 - After second test (+30):", totalScore);

    totalScore -= 5;
    console.log("Step 4 - After deduction (-5):", totalScore);

    totalScore *= 2;
    console.log("Step 5 - After bonus round (doubled):", totalScore);

    totalScore++;
    console.log("Step 6 - After increment (+1):", totalScore);

    let remainder = totalScore % 7;
    console.log("Step 8 - Remainder when divided by 7:", remainder);
    
    console.log("--- TASK 2 END ---\n");
}

// --- TASK 3 ---
function runTask3() {
    console.log("--- TASK 3 START ---");
    
    let studentAge = "21";
    let examScore = "70";
    let passMark = "50";
    let studentName = 74;

    studentAge = parseInt(studentAge);
    console.log("studentAge:", studentAge, "| Type:", typeof studentAge);

    examScore = parseFloat(examScore);
    console.log("examScore:", examScore, "| Type:", typeof examScore);

    passMark = Number(passMark);
    console.log("passMark:", passMark, "| Type:", typeof passMark);

   
    studentName = String(studentName);
    console.log("studentName:", studentName, "| Type:", typeof studentName);


    let isPassed = examScore > passMark;
    console.log("Is examScore greater than passMark?", isPassed);
    
    console.log("--- TASK 3 END ---\n");
}

// --- TASK 4 ---
function runTask4() {
    console.log("--- TASK 4 START ---");
    
    function getGrade(score) {
        if (score >= 70) {
            return "A - Distinction";
        } else if (score >= 60) {
            return "B - Merit";
        } else if (score >= 50) {
            return "C - Pass";
        } else if (score >= 40) {
            return "D - Near Pass";
        } else {
            return "F - Fail";
        }
    }

    let score1 = 70;
    console.log(`Score: ${score1} | Grade: ${getGrade(score1)}`);

    let score2 = 50;
    console.log(`Score: ${score2} | Grade: ${getGrade(score2)}`);

    let score3 = 30;
    console.log(`Score: ${score3} | Grade: ${getGrade(score3)}`);
    
    console.log("--- TASK 4 END ---\n");
}