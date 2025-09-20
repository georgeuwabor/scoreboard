let home = 0;
let guest = 0;

let homeNum = document.getElementById("home-num");

function homeAdd1(num1) {
    home += 1;
    homeNum.textContent = home;
}

function homeAdd2(num2) {
    home += 2;
    homeNum.textContent = home;
}

function homeAdd3(num3) {
    home += 3;
    homeNum.textContent = home;
}


let guestNum = document.getElementById("guest-num");

function guestAdd1(num1) {
    guest += 1;
    guestNum.textContent = guest;
}

function guestAdd2(num2) {
    guest += 2;
    guestNum.textContent = guest;
}

function guestAdd3(num3) {
    guest += 3;
    guestNum.textContent = guest;
}






function reset() {
    home = 0;
    guest = 0;
    homeNum.textContent = home;
    guestNum.textContent = guest;
}

// let home = 0;
// let guest = 0;  













// function homeAdd(num) {
//     home += num;
//     document.getElementById("home-num").textContent = home;
// }

// function guestAdd(num) {
//     guest += num;
//     document.getElementById("guest-num").textContent = guest;
// }

// function reset() {
//     home = 0;
//     guest = 0;
//     document.getElementById("home-num").textContent = home;
//     document.getElementById("guest-num").textContent = guest;
// }  