const preDefinedPassword = "thisismypassword";
let password = prompt("Please enter your password: ");

if( password == preDefinedPassword){
    console.log("Access Granted");
}
else {
    console.log("Access Denied");
}
