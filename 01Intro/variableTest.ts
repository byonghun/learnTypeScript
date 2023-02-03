let greetings: string = "Hello John";
let num: number = 6;

// ERRORS
// greetings = true;
// -> method not found in number
// num.toUpperCase();
// -> typo error
// greetings.toLowercase();
console.log(greetings, num);

//////////////////////////////////////////////////////////////////////////
// number
let oldUserId: number = 123123.3;
// methods associated with userId will only display number related methods
// user.<METHODS> (ex: toFixed)

// BEST PRACTICE
// typescript is smart enough to know that userId is a number 
// therefore setting a type to userId is not needed
// better approach
let userId = 123123.3;
userId.toFixed();
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// boolean
let isLoggedIn: boolean = false;
// methods associated with userId will only display number related methods
// isLoggedIn.<METHODS> (ex: valueOf)
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
// any
// type is defaulted to any -> let hero: any;
// let hero;
let hero: string;

function getHero() {
  // ERROR
  // return true
  return "Spiderman";
}

// makes sure that getHero function returns a string
// use case: api calls returning specific responses
hero = getHero();
//////////////////////////////////////////////////////////////////////////

// removes redclare block-scoped variable 'greetings' .ts
export {}