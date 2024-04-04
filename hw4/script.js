//Задание 1

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    console.log(`${i} - нечетное число`);
  } else if (i % 2 === 0) {
    console.log(`${i} - четное число`);
  } else {
    console.log(`${i} - 'ноль'`);
  }
}

//Задание 2

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

//Задание 3

let array2 = [];
for (let i = 0; i < 5; i++) {
  array2.push(Math.floor(Math.random() * 10));
}

sum = 0;
for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}
let min = Math.min(...array2);
let isThree = array2.includes(3);
console.log(array2);
console.log("Сумма элементов массива:", sum);
console.log("Минимальное число массива:", min);
console.log("Наличие в массиве числа 3:", isThree);

//Задание 4
for (let i = 1; i <= 20; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "x";
  }
  console.log(row);
}
