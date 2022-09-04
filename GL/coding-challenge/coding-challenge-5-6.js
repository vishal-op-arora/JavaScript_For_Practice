/**
 * Description
    Write a program which has a function  to check whether the given string i.e, abcaaaaaacba is a palindrome or not.

    If the string is palindrome then print,”Given String is Palindrome”
    Else print “Given String is not a palindrome”
 */

function isPalindrome(str){
 
    var left = 0;
    var right = str.length - 1;

    while(left < right){
        if(str.charAt(left) !== str.charAt(right)){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

var str = "abcaaaaaacba";
console.log(`is string "${str}" Palindrome ? `, isPalindrome(str));