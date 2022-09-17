const name = 'John', message = 'Good Morning';

const greeting = message + ' ' + name + '!';
console.log(greeting);

/**
 * backtick `
 */

const greeting2 = `${message} ${name}!`;
console.log(greeting2);

const greeting3 = `${message} 


${name}!`;
console.log(greeting3);


const john = {
    name : 'John',
    email : 'john@gmail.com',
    age : 32
}

const strTr = '<tr>' +  
    '<td>' + john.name + '</td>' +
    '<td>' + john.email + '</td>' +
    '<td>' + john.age + '</td>' +
    '<tr>' ;
console.log(strTr);

const strTemp = `
    <tr>
        <td>${john.name}</td>
        <td>${john.email}</td>
        <td>${john.age}</td>
    </tr>
`;

console.log(strTemp);