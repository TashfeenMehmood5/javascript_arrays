//task#1 find the last element of an list without giving a hard coded index
let array = [2, 4, 6, 7, 8, 10, 12];
let lastelement = array[array.length - 1];

console.log("last element is : " + lastelement);

//task#2 check whether the first or last index of an list has a specified value, lets say 5

let array_2 = [4,7,9,0,2,1,5];

if(array_2[0] == array_2[-1])
{
console.log("yess the are same on frist and last index : ");


}
else{
    console.log("no first and last index dont have same values");
}

//task#3 make a list to store the name of students and check whether that 
// list has your own name or not aslo return the index of that value:

var studentsname = ["ali" , "aliya" ,"ayesha" , "usama", "saad", "tashfeen"];
console.log(studentsname);

var find_n = "tashfeen" ;
let index = studentsname.indexOf(find_n);
    if (index !== -1) 
    {
    console.log(` "${find_n}" is in the list and index number is : ${index}.`);
    }

else{
    console.log(` "${find_n}" is not in the list .`);
}


//task#4 add the list element at the specified index

var array4 = ["apple" , "grapes","orange"," melon"," mango"];
const index_ =3;
const value ="gava";
console.log(array4);
array4.splice(index_, 1 ,value);

console.log("array4 is update : " + array4);

//task#5 delete the list element from the specified index

var arry = [2,4,6,5,7,9];

console.log(arry);

arry.splice(arry,2);
console.log("updated array : " + arry);







