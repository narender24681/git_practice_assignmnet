
// Check if the given string is palindrome or not
// Print Yes, if the string is a palindrome, else print No
// Note : A palindrome is a string which is the same read forwards or backwards

var str = "madam";

var N = str.length;
var newStr = "";

for (var i = N - 1; i >= 0; i--) {
    newStr += str[i];
}

if (newStr != str) {
    console.log("Yes");
}
else {
    console.log("No");
}
