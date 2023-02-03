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
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("john");
signUpUser("john", "john@learn.dev", false);
loginUser("byonghun", "byonghun@learn.dev");
