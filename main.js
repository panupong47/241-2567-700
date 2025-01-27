/*
// //string,number,Boolean,object,arrey

//string
let firstname = 'John';
const  idcard = '134';


//Number
let age = 25;
let heigth = 5.9;

//Boolean
let isMarried = false;
firstname = 'xxxxxxxxx';
let firstname = 'John';
console.log('my name is ', firstname, 'and i am ', age, 'years old.');



*/

/*
== เท่ากับ
< น้อยกว่า
> มากกว่า
>= มากกว่าเท่ากับ
<= น้อยกว่าหรือเท่ากับ
!= ไม่เท่ากับ
+ บวก 
- ลบ 
* คณ
/ หาร 
% หารเอาเศษ (mod)
*/

/*
let number1 = 5;
let number2 = 10;
*/
/*
let condition1 = number1 >= number2; // Boolean ค่าที่ได้จะเป็น true or false
console.log('result of condition is ',condition1);
*/
/*
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D

*/


//if -else condition
/*
if (number1 == number2){
    console.log('this is if ')
}else if (number1 == number2) {
    console.log('this is rlse if');
}else{
    console.log('this is else');
}
    */
/*
let score = prompt('Enter your gread:'); //รับค่าเกรด

if (score >= 80){
    console.log('you are gread A');
} else if (score >= 70 ){
    console.log('you are gread B');
}else if (score >= 60 ){
    console.log('you are gread C');
}else if (score >= 50 ){
    console.log('you are gread D');
}else {
    console.log('you are gread F');
}
*/

/*
&& และ
|| หรือ
! not หรือ ไม่
*/
/*
let number1 = 5;
let number2 = 8;
// true && true
let condition = number1 >= 3 && number2 >= 5;
console.log("result of conditioin",condition);
// true || false = true
let condition1 = number1 >= 3 || number2 >= 5;
console.log("result of conditioin",condition);
// true || false = !(true) = false
let condition1 = number1 >= 3 || number2 >= 5;
console.log("result of conditioin",condition);

let = age = 30;
let gender = 'male'

//true && true = true
if (age >= 20 && gender == 'male'){
   console.log('you are male adult');
}
*/
/*
let number = 25;

if (!(number % 2 == 0 )) {
   console.log('You are even number ');
   
}
*/

/*
while loop
for
*/
/*
let counter = 0;

while (counter < 10 ){ //true
   console.log('while loop ');
   counter = counter + 1;
}
*/


/*
arey
*/
/*
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1,age2,age3,age4);
*/
/*
let ages = [20,30,40];
console.log('new ages',ages[2]);
console.log('age list',ages);

//1. แทนที่ค่าใน arrey
ages = [45,50];
console.log('new ages',ages);

//2. ต่อ arrey
ages.push(55);
console.log('new ages',ages);
*/
/*
let ages = [30, 35, 40, 45, 50];
*/
/*
if (!ages.includes(40)){
    console.log('you have to be 40');
}
*/
/*
console.log(ages);
ages.sort();
console.log(ages);

let names_list = ['john','jane','joe','james'];
names_list.push('jim');
console.log(names_list.length);
console.log(names_list[0]);
console.log(names_list[1]);
console.log(names_list[2]);

for (let index = 0; index < names_list.length; index++){
    console.log('name list',names_list[index]);
}
*/

/*
object
*/
/*
let student = [{
    name : 'zz',
    age : 90,
    grade : 90
},{
    name : 'zz',
    age : 90,
    grade : 'A'
},{
    name : 'aa',
    age : 60,
    grade : 'B'
}];

student.pop() //ตัดตัวท้ายสุดออก


for (let index = 0; index < student.length; index++){
    console.log('student',student[index + 1]);
    console.log('student',student[index].name);
    console.log('student',student[index].age);
    console.log('student',student[index].grade);
}
*/

/*
object + arrey
*/

/*
let score1 = 50
let score2 = 90
let grade = ' '
//arrow function
function calculateGrade = (score) =>  { 
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}
//normal function
function calculateGrade (score){
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}




let student1 = calculateGrade(score1)
let student2 = calculateGrade(score2)
console.log('grade: ', student1, student2);
*/
/*
let scores  = [10,20,30,40,50];
for (let index = 0 ; index < scores.length; index++){
    console.log(scores[index]);
}
/*
score[0] = scores[0] *2;
score[1] = scores[1] *2;         
score[2] = scores[2] *2;
score[3] = scores[3] *2;
score[4] = scores[4] *2;
*/
/*
    |
อันเดียวกัน
    |

scores = scores.map((s) => {
    return s * 2;
})


scores.forEach((s) => {
console.log('score',s);
})
*/

/*
let scores = [10,20,30,40];
let newScortes = []

for (let index = 0; index < scores.length; index++){
   console.log('New score',scores[index]);
   /*if (scores[index] > 30){
       newScores.push(scores[index]);
   }
}
   */
/*
let newScortes = scores.filter((s) => {
    if (s >= 30){
        return true;
    }else{
        return false;
    }
})


newScortes.forEach((ns) => {
    console.log('new score',ns);
})
*/

let students = [
    {
        name: 'John',
        score: 50,
        grade: 'A'
    },
    {
        name: 'Jane',
        score: 75,
        grade: 'B'
    },
    {
        name: 'Jim',
        score: 60,
        grade: 'C'
    }   
]
let student = students.find((s) => {
    if (s.name == 'Jane'){
        return true
    }
})

let doubleScore_student = students.map((s) => {
    return s.score * 2
})

//ค่าสูงสุด
let heigthScore_student = students.filter((s) => {
    if (s.score >= 60){
        return true
    }
})
console.log('studen:',student)
console.log('heigth score student:',heigthScore_student)

