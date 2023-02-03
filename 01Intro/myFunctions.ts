// Error Examples /////////////////////////////////////////////////////
// num param gets defaulted to num: any
// can cause issues because users can now call any methods to num prop
// function addTwo(num) {
//   num.toUpperCase()
//   return num + 2;
// }

// val is defaulted to any
// function getUpper(val) {
//   return val.toUpperCase()
// }

// all the parameters are any
// function signUpUser(name, email, isPaid) {}
// let loginUser = (name, email, isPaid) => {}

// addTwo("5");
// addTwo(5);

// getUpper(4);

// signUpUser(1, 2, 3);
//////////////////////////////////////////////////////////////////////

// :number -> needs to return a number
function addTwo(num: number):number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);
getUpper("john");
signUpUser("john", "john@learn.dev", false);
loginUser("byonghun", "byonghun@learn.dev");

function getValue(val: number): boolean | string {
  if(val > 5) {
    return true
  }

  return "200 OK"
}

const getHello = (str: string): string => {
  return "hello world"
}

const heroes = ["spiderman", "ironman", "superman"]
// const heroes = [1, 2, 3]
// we do not need to add type check for the callback param hero 
// typescript is smart enough to know what type it is from the array
// we need to add the return type
heroes.map((hero): string => `hero is ${hero}`)

// use void if nothing is returned
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// never type represents values which are never observed
// in this case, the function throws an exception or terminates execution of the program
function handleError(msg: string): never {
  throw new Error(msg);
}

export {}