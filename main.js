// Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому —
// підсумовує переданий параметр з тим, що передали перший раз і тд.Все це із замиканнями, наприклад:
// sum(3) = 3 sum(5) = 8 sum(20) = 28


function sum(x) {
  let total = x;
  return function(y) {
    total += y;
    return total;
  };
}

let first = Number(prompt("Enter the first number"));
let result = sum(first);
while (true) {
let next = prompt("Enter another number");
    if (next === null) {
      console.log('End of task 1 ')
      break;
    } else {
        next = Number(next);
        console.log(result(next));
      }
    }


// Даний масив з елементами різних типів.Створити функцію, яка вираховує середнє арифметичне лише числових елементів
// даного масиву.

function averageOfNumbers(arr) {
  let sum = 0;
  let count = 0;
  for (let element of arr) {
    if (typeof element === "number") {
      sum += element;
      count++;
    }
  }
  if (count !== 0) {
    return sum / count;
  } else {
    return 0;
  }
}

let array = [];
while (true) {
  let input = prompt("Enter an array element");
  if (input === null) {
    break;
  } else {
    let element = Number(input);
    if (isNaN(element)) {
      element = input;
    }
    array.push(element);
  }
}
console.log(array)
console.log(averageOfNumbers(array));
console.log('End of task 2')

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak.
// У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії,
// вказаної у змінній znak.Обидва числа та знак виходять від користувача.

function doMath(x, znak, y) {
  let result;
  switch (znak) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    case "^":
      result = Math.pow(x, y);
      break;
    default:
      console.error("Invalid operation");
      return;
  }
  console.log(result);
}

let frst = Number(prompt("Enter the first number"));
let scnd = Number(prompt("Enter the second number"));
let operation = prompt("Enter one of these operations: +, -, *, /, %, ^");
doMath(frst, operation, scnd);
console.log('End of task 3')

// Написати функцію заповнення даними користувача двомірного масиву.Довжину основного масиву та внутрішніх
// масивів задає користувач.Значення всіх елементів масивів задає користувач.

function fillArray() {
let array = [];
let mainLength = Number(prompt("Enter the length of the main array"));
for (let i = 0; i < mainLength; i++) {
    let innerLength = Number(prompt("Enter the length of the inner array at index " + i));
    let innerArray = [];
    for (let j = 0; j < innerLength; j++) {
        let value = prompt("Enter the value of the element at index " + i + ", " + j);
        value = Number(value) || value;
        innerArray.push(value);
        }
        array.push(innerArray);
    }
return array;
}

console.log(fillArray());
console.log('End of task 4')

// Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом.
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor".Вихідний рядок та символи для видалення задає користувач
function removeChars(str, chars) {
  let result = "";
  for (let char of str) {
    if (!chars.includes(char)) {
      result += char;
    }
  }
  return result;
}

let string = prompt("Enter the string");
let characters = prompt("Enter the characters to remove");
characters = characters.split("");
console.log(removeChars(string, characters));
console.log('End of task 5')

