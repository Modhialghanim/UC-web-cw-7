/* ------------------------------------------ */
let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0]; //المصفوفة

let all_grades_div = document.getElementById("all-grades");
let random_grade_div = document.getElementById("random-grade");
/* لا تقم بتعديل الأسطر المكتوبة بالأعلى */

/*  الجزء الأول والثاني من التمرين */

grades.pop();
grades.push(99);
grades.forEach(element => {
  all_grades_div.innerHTML += `<span>${element}<span>`
});

let randomIndex =  Math.floor(Math.random() * grades.length)
random_grade_div.innerHTML = `<span>#${randomIndex}: ${grades[randomIndex]}<span>`



/* الجزء الثالث من التمرين */


let course = {
  name: "UniCODE",
  track : "",
  studentsCount : 0,
  location : "Kuwait University"
}

//Change studentsCount,track property here
course.studentsCount=40
course.track="web"



//Console log here

console.log(`Hello my name is modhi , im in (${ course.track})track value from object at (${course.name})`)

//Create student object here
let student={
  nmae: "modhi" ,
  universty: "Kuwait University"
}
