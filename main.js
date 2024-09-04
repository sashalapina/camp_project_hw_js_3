//task_1.1
let age = 21;
if (age >= 18) {
  console.log('Вы совершеннолетний');
} else {
  console.log('Вы несовершеннолетний');
}

//task_1.2
let number = 54;
if (number % 2 === 0) {
  console.log('Число четное');
} else {
  console.log('Число нечетное');
}

//task_1.3
let score = 5;
if (score >= 0 && score <= 25) {
  console.log('Неудовлетворительно');
} else if (score > 25 && score <= 50) {
  console.log('Удовлетворительно');
} else if (score > 50 && score <= 75) {
  console.log('Хорошо');
} else if (score > 75 && score <= 100) {
  console.log('Отлично');
} else {
  console.log('Оценка не подходит под установленные критерии');
}

//task_2.1
let day = 3;
let day_str = '';
switch (day) {
  case 1:
    day_str = 'Monday';
    break;
  case 2:
    day_str = 'Tuesday';
    break;
  case 3:
    day_str = 'Wednesday';
    break;
  case 4:
    day_str = 'Thursday';
    break;
  case 5:
    day_str = 'Friday';
    break;
  case 6:
    day_str = 'Saturday';
    break;
  case 7:
    day_str = 'Sunday';
    break;
  default:
    day_str = 'Invalid day';
}

console.log(day_str);

//task_2.2
let grade = 5;
let grade_str = '';
switch (grade) {
  case 1:
    grade_str = 'Плохо';
    break;
  case 2:
    grade_str = 'Удовлетворительно';
    break;
  case 3:
    grade_str = 'Хорошо';
    break;
  case 4:
    grade_str = 'Очень хорошо';
    break;
  case 5:
    grade_str = 'Отлично';
    break;
  default:
    grade_str = 'Неверная оценка';
    break;
}

console.log(grade_str);

//task_2.3
let hour = 0;
let hour_str = '';
switch (true) {
  case hour >= 5 && hour < 12:
    hour_str = 'Доброе утро';
    break;
  case hour >= 12 && hour < 18:
    hour_str = 'Добрый день';
    break;
  case hour >= 18 && hour < 23:
    hour_str = 'Добрый вечер';
    break;
  case (hour >= 23 && hour < 24) || (hour >= 0 && hour < 5):
    hour_str = 'Доброй ночи';
    break;
  default:
    hour_str = 'Неверное время';
    break;
}
console.log(hour_str);

//task_3.1
for (let i = 1; i < 11; i++) {
  console.log(i);
}

//task_3.2
let sum = 0;
for (let i = 0; i < 101; i++) {
  sum += i;
}
console.log(sum);

//task_3.3
for (let i = 2; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//task_4.1
let n = 1;
while (n <= 10) {
  console.log(n);
  n++;
}

//task_4.2
n = 1;
let sum_n = 0;
while (n <= 50) {
  sum_n += n;
  n++;
}
console.log(sum_n);

//task_4.3
n = 2;
while (n <= 20) {
  if (n % 2 === 0) {
    console.log(n);
  }
  n++;
}
