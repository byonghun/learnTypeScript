"use strict";
exports.__esModule = true;
var greetings = "Hello John";
var num = 6;
// ERRORS
// greetings = true;
// -> method not found in number
// num.toUpperCase();
// -> typo error
// greetings.toLowercase();
console.log(greetings, num);
// number
var oldUserId = 123123.3;
// methods associated with userId will only display number related methods
// user.<METHODS> (ex: toFixed)
// typescript is smart enough to know that userId is a number 
// therefore setting a type to userId is not needed
// better approach
var userId = 123123.3;
userId.toFixed();
// boolean
var isLoggedIn = false;
