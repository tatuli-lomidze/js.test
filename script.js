"use strict";


// 1) ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (let i=5; i <= 100; i++) {
    console.log(i);
}


// 2) .მოცემულია მასივი:
// Let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და 	ნაკლებია 10ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let item1 of array1) {
    if (item1 > 0 && item1 < 10) {
        console.log(item1)
    }
}


// 3) მოცემულია მასივი
// Let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item2 of array2) {
    if (item2 = 5) {
        console.log("არის");
        break;
    }
}

// 4) მოცემულია მასივi
// Let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let item3 of array3) {
sum += item3; }

console.log (sum);

// 5)მოცემულია მასივი:
// Let array4 = [1, 2, 3, 7, 6, 9];
// გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 7, 6, 9];
let sum2 = 0;
for (let item4 of array4) {
    sum2 += item4
}

let result = sum2 / array4.length;
console.log(result);

// 6)მოცემულია მასივი
// Let array5 = [1, 2, 3, 7, 6, 9];
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა


let array5 = [1, 2, 3, 7, 6, 9];
for (let item5 of array5) {
    if(item5 != 7) {
        console.log(item5);
    }
}

// ან მეორე ვარიანტი 

let numbers = [1, 2, 3, 7, 6, 9];
for (let z of numbers) {
if (z == 7) {
  continue;
}
console.log(z);
}

// 7) ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };

  console.log(user.studentstatus);

//   ან

 console.log (user["studentstatus"]);

// 8) მოცემულია ობიექტი:
// let user = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// }
// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
// Hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user2 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

    if (user2.age < 18 && user2.studentstatus == "active") {
        console.log("Hello")
    } else if (user2.name == "levani") {
        console.log("hello levani");
    } else if (user2.studentstatus == "active" || user2.age < 25) {
        console.log("hello world");
    } else {
        console.log("error");
    }

// 9)  მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array6 = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let item6 of array6) {
  for (let element of item6) {
    if (element > 0) {
        console.log(element);
    }
  }
   }

// 10)  let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// 1.ამოიღეთ მარტო ლუწი რიცხვები
// 2.ამოიღეთ კენტი რიცხვები 

 
let array7 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];

// ლუწი

for (let item7 of array7) {
    if (item7 % 2 == 0) {
        console.log(item7);
    }
}

// კენტი

for (let item8 of array7) {
    if (item8 % 2 == 1) {
        console.log(item8);
    }
}

