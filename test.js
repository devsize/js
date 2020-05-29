/*
function foo(s, name, age) {
  if (age < 0) {
    return 'Not born yeat!'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const name = 'Igor'
const age = -34

const fooBar = foo`Your name is ${name}. Your age is ${age}!`
console.log(fooBar);*/

/*
function sumAll(...args) {
  let result = 0;
  for (let num of args) {
    result += num;
  }
  return result;
}

console.log(sumAll(1, 2, 3, 4, 5, 6));*/

//Замыкания
/*
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  }
}

const logWithLastName = createMember('Igor');
console.log(logWithLastName('Kuznetsov'));*/

//Массивы, переворачивание
// const cars = ['Мерседес', 'БМВ', 'Ауди', 'Фольцваген'];
// console.log(cars.reverse());

//Переворачиваем строку. Разбиваем её с превращением в массив. Далее переворачиваем массив. Далее склееваем в строку
// const text = 'Привет, мы изучаем JavaScript!';
// console.log(text.split('').reverse().join(''));
// console.log(text.charAt(2));
// console.log(text.indexOf('вет'));
// console.log(text.substr(0, 6));
// console.log(text.substring(0, 4));

/*
const cars = ['Мерседес', 'БМВ', 'Ауди', 'Фольцваген'];
let index = cars.indexOf('БМВ')
console.log(cars[index]);
*/

// const people = [
//   {name: 'Igor', age: 34},
//   {name: 'Irina', age: 30},
//   {name: 'Viktor', age: 32}
// ];

/*let personInfo;
for (let person of people) {
  if (person.name === 'Irina') {
    personInfo = `Person name: ${person.name} & person age: ${person.age}`;
  }
}
console.log(personInfo);*/

/*const index = people.findIndex(function (person) {
  if (person.name === 'Irina') {
    return person
  }
})*/

//findIndex for Objects in array
// const index = people.findIndex(person => person.name === 'Irina');
// console.log(people[index]);

/*  //find  without index-> just find object in array
const person = people.find(person => person.name === 'Irina');
console.log(person);*/

//Метод map всегда возвращает НОВЫЙ массив
/*
const cars = ['Мерседес', 'БМВ', 'Ауди', 'Фольцваген'];
const upperCars = cars.map(car => car.toUpperCase());
console.log(upperCars)
console.log(cars)*/
/*
const fib = [1, 1, 2, 3, 5, 8, 13];
const pow2 = num => num ** 2;
const pow2Fib = fib.map(pow2);
const filteredNumbers = pow2Fib.filter(num => num >= 25); //Filter
console.log(pow2Fib);
console.log(filteredNumbers);*/

//reduce - объединяет все элементы массива в один
/*const people = [
  {name: 'Igor', budget: 3400},
  {name: 'Irina', budget: 3000},
  {name: 'Viktor', budget: 3200}
];*/
/*const sumBudget = people.reduce(function (accum, person) {
  if (person.budget <= 3200) {
    accum += person.budget;
  }
  return accum;
}, 0);*/

// const sumBudgets = people
// .filter(person => person.budget <= 3200)
// .reduce((acc, person) => acc += person.budget, 0);

// console.log(sumBudgets);

//Объекты
const person = {
  name: 'Vladilen',
  age: 26,
  // age: undefined,
  isProgrammer: true,
  languages: ['ru', 'en', 'de'],
  'complex key': 'complex value',
  ['key_' + (1 + 3)]: 'complex Key ',
  /*greet: function () {
    console.log('greet from person');
  }*/
  greet() {
    console.log('greet from person');
  },
  info() {
    console.info('Information about', this.name);
  }
};
// console.log(person.key_4);
// console.log(person["complex key"]);
// const keyAge = 'age';
// console.log(person[keyAge]);

//delete value of key
// person['key_4'] = undefined;

//delete key
// delete person['key_4'];
// console.log(person);

//Деструктуризация избавляет от избыточного повторяемого кода
// const {name, age: personAge = 10, languages} = person;
// console.log(name, personAge, languages);

//Итерирование объектов -> цикл for IN .Опасен тем, что пробегается ещё и по прототипу объекта, по этому нужно делать
//проверку на hasOwnProperty
/*for (let key in person) { // старый метод
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}*/
//новый метод
/*const keys = Object.keys(person); // keys возвращает массив значений
keys.forEach((key) => { // у массивов так же есть метод forEach, который принимает callback
//или просто Object.keys(person).forEach((key) => {
  console.log('key: ' + key);
  console.log('value: ' + person[key]);
});*/
// console.log(person.info());

/*const logger = {
  name: 'logger',
  keys() {
    console.log(`Keys:`, Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach(function(key) {
      console.log(`Key: ${key}; value: ${this[key]}`);
    }.bind(this));
  },
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('-------start--------');
    }
    let self = this;
    Object.keys(this).forEach(function(key, index, array) { // forEach имеет стандартно 3 параметра
      console.log(`Key: ${key}; value: ${self[key]}`);
      if (between && index !== array.length - 1) {
        console.log('-------------------');
      }
    });
    if (bottom) {
      console.log('-------end--------');
    }
  }
};*/
// keys - функция, по прототипу объект. Раз это объект, у него есть свои свойства и методы, по типу call и bind
// bind всегда возвращает новую функцию, которую нужно вызывать, т.к. call сразу вызывает
// const bound = logger.keys.bind(person);
// bound();
//или сразу вызвать
// logger.keys.call(person);
// logger.keysAndValues.call(person);

//как передавать параметры
//apply и call одно и то же, за исключением того, что в call мы можем передать сколько угодно параметров, а в apply
// только 2(2-й параметр прийдётся передавать массивом)
// logger.withParams.call(person, true, true, true);
// logger.withParams.apply(person, [true, true, true]);

//Промисы(используются в случае асинхронного кода)
const delay = (wait = 1500) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      // reject('Something went wrong!');
    }, wait)
  });
  return promise;
};
/*delay(2000)
  .then(() => console.log('After'))
  .catch((err) => console.error('Error: ', err))
  .finally(() => console.log('Finally!'));*/

const getData = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8, 13]));
// getData().then(data => console.log(data));
//В новых версиях кода омжно работать с промисами без вызовов callback функций с помощью await, который не может использоваться без async
async function asyncExample() {
  try {
    await delay(3000);
    const data = await getData();// тут применаяется await потому что getData тоже возвращает promise
    console.log('Data: ', data);
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Finally!')
  }

}
asyncExample();