//Домашне завдання

// - створити функцію яка обчислює та повертає площу
// прямокутника зі сторонами а і б


// let calc = (a,b) => a * b;
// console.log(calc(10,20))


// - створити функцію яка обчислює та повертає площу кола
// з радіусом r

// let Sq = (r) => Math.PI*Math.pow(r,2);
// console.log (Sq (25))


// - створити функцію яка обчислює та повертає площу циліндру
// висотою h, та радіутом r

// const cilindr = (r,h) => Math.PI*Math.pow(r,2)*h;
// console.log(cilindr(5,6))


// - створити функцію яка приймає масив та виводить кожен його
// елемент
//
// let arr = [1,2,3,4,5];
// function foo (array) {
//     for (const item of array){
//         console.log(item);
//     }}
// foo(arr);

// - створити функцію яка створює параграф з текстом. Текст
// задати через аргумент

// function foo (text){
//     document.write(`<p>${text}</p>`);
// }
// foo ("Hello");

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

// function foo (text){
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`);
// }
// foo ("Hello");

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут
// використовувати цикл)


//
// function foo (text,num){
//     document.write(`<ul>`);
// for (let i=0; i<num; i++){
//     document.write(`<li>${text}</li>`);}
//     document.write(`</ul>`);
// }
//
// foo("HELLO",10);


// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список







// let arr = [32,56,'hello','users',true,false];
// function foo(array) {
//     document.write(`<ul>`)
//
// for (const item of array)
// {document.write(`<li>${item}</li>`)}
//
//         document.write(`</ul>`)
//     }
//
//     foo (arr);



// - створити функцію яка приймає масив об'єктів з наступними
// полями id,name,age , та виводить їх в документ. Для кожного
// об'єкту окремий блок.

// const arr = [
//     {id: 1,
//         name: `Vasya`,
//     age: 23},
//     {id: 2,
//         name : `Dasha`,
//     age: 25},
//     {id: 3,
//         name : `Masha`,
//         age: 24}
// ]
// let objArr = function (array){
//     for(const item of array) {
//         document.write(`<div>${item.id}--${item.name}--${item.age}</div>`)
//
//     }
// }
// objArr(arr);

// - створити функцію яка повертає найменьше число з масиву

// const arr=[1,25,63,89,78,54];
// const min = (array) => {
//     let min = array [0];
//     for (const item of array) {
//         if (item<min){
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(min(arr));

// - створити функцію яка приймає масив чисел, сумує значення
// елементів масиву та повертає його. Приклад [1,2,10]->13

const arr=[1,5,6,8,32];
function foo (array) {
    let sum=0;
    for (const item of array){
        sum+=item;
    }
    return sum;
}
console.log(foo(arr));