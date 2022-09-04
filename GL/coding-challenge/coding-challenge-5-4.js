/**
 * Description
    Write a program to create an object of a book having different properties like ‘name’ , ’authors’ , ’publication year’ and ‘publisher’.

    Add a property called ‘change name’ as a function to change the name of the current book object.
    Add a property called ‘addAuthors’ as a function to the book object to add more authors to this current book object.
 */

var book = {
    'name' : "JavaScript Complete Reference",
    'authours' : "Lucy",
    'puished year' : 2022,
    'publisher' : 'Wiki Books'
}

console.log(book);

book["change name"] = function(newName){
    this.name = newName;
}
console.log(book);

book["change name"]("JavaScript by Wiki");
console.log(book);

book.addAuthors = function(newAuthor){
    this.authours = this.authours + ", " + newAuthor;
}
console.log(book);
book.addAuthors("Vishal");
console.log(book);