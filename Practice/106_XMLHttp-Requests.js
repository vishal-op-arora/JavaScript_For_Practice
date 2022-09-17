/**
 * 
 * After creating an object of XMLHttpRequest,open and send methods are used to make a backend call.
 * 
 * Steps to  make a call to server using XMLHttpRequest class-
 *  1. Create a object of XMLHttpRequest class using new keyword.
 *  2. Provide the Http verb name and url in the open() method of above XMLHttpRequest object.
 *  3. Call the send() of XMLHttpRequest object.
 */

//run on browser 

const xhr = new XMLHttpRequest();

// Ajax (asynchronous JavaScript and XML)
xhr.onload = function () {
    console.log(xhr.responseText)
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send();
