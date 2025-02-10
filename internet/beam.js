/*  filer 
let students = [
    {
        name : 'beam',
        number : 11,
        age : 20
    },
    {
        name : 'peach',
        number : 12,
        age : 20
    },
    {
        name : 'panu',
        number : 13,
        age : 20
    },
    {
        name : 'phichaya',
        number : 14,
        age : 20
    }
]
let student = prompt('Enter your name : ');//รับค่า
    student = students.find((s) => {
    if (s.name == 'panu'){
        return true
    }
})
console.log('studen:',student)
/*
*/

let score = prompt('Enter Your Gsade : ');
console.log('You score :'+ score);
if (score >= 80 ){
    console.log('Grade A');
}else if (score >= 70){
    console.log('Grade B');
}else if (score >= 60){
    console.log('Grsde C');
}else if(score >= 50){
    console.log('Grade D');
}else{
    console.log('Grade F');
}