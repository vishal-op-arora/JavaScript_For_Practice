/**
 * Do -While loop execute once 
 */

var i = 1;

do{
    var line = "";
    var j = 1;

    do{
        line = line + j + " ";
        j++;
    } while(j <= i)

    console.log(line);
    i++;
}while(i <=10)