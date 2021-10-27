var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld'},
    { nombre: "Gera", saldo: 290, password: 'l33t'},
    { nombre: "Maui", saldo: 67, password: '123'}
];

var saldoStorage1 = sessionStorage.getItem("saldoStorage1");
var accountNumberA = sessionStorage.getItem("accountNumberA");
alert(accountNumberA)
cuentas[accountNumberA].saldo = saldoStorage1;
alert(cuentas[accountNumberA].saldo)
/* cuentas[accountNumber].saldo = saldoStorage1; */

/* document.getElementsById('account-password').addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("signin-button").click();
    }
}); */



function signIn(){
    var accountName = document.getElementById('account-username').value;
    var accountPassword = document.getElementById('account-password').value;
    return selectAccount(accountName,accountPassword)
}

function forgotPassword(){
    return document.getElementById('id02').style.display='block'
}

function passwordRecovery(accountName = document.getElementById('account-username-recovery').value){
    let found = false;
    for (let i = 0; i < cuentas.length; i++) {
        if (accountName == cuentas[i].nombre){
            accountNumber = i;
            console.log("true")
            document.getElementById('reveal-account-password').value = cuentas[accountNumber].password;
            found=true;
        }
    }
    if (!found) {
        alert('El usuario no existe. Intenta nuevamente.')
    }
}

function selectAccount(accountName,accountPassword) {
    let found = false;
    for (let i = 0; i < cuentas.length; i++) {
        if (accountName == cuentas[i].nombre && accountPassword == cuentas[i].password) {
            accountNumber = i;
            console.log("true")
            sessionStorage.setItem("accountNumber",accountNumber);
            sessionStorage.setItem("accountNumberA",accountNumberA);
            found=true;
            window.location.href = 'menu.html';
        }
    }
    if (!found) {
        alert('El usuario o la contrasena son invalidos. Intenta nuevamente.')
    }
}

// function selectAccount() antes de ser convertida en un for
/* function selectAccount(accountName,accountPassword) {
    if (accountName == cuentas[0].nombre && accountPassword == cuentas[0].password) {
        accountNumber = 0;
        console.log("true")
        sessionStorage.setItem("accountNumber",accountNumber);
        window.location.href = 'menu.html';
    } else if (accountName == cuentas[1].nombre && accountPassword == cuentas[1].password){
        accountNumber = 1;
        console.log("true")
        sessionStorage.setItem("accountNumber",accountNumber);
        window.location.href = 'menu.html';
    } else if (accountName == cuentas[2].nombre && accountPassword == cuentas[2].password) {
        accountNumber = 2;
        console.log("true")
        sessionStorage.setItem("accountNumber",accountNumber);
        window.location.href = 'menu.html';
    } else {
        alert("Cuenta invalida o contrasena incorrecta.")
    }
} */

function showPassword() {
    var x = document.getElementById("account-password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
} 

//Codigo antes de fusionar selectAccount(), passwordVerification() y verifyPassword()
/* function selectAccount() {
    let accountName = document.getElementById('account-username').value;
    if (accountName == cuentas[0].nombre) {
        accountNumber = 0;
        verifyPassword();
    } else if (accountName == cuentas[1].nombre){
        accountNumber = 1;
        verifyPassword();
    } else if (accountName == cuentas[2].nombre) {
        accountNumber = 2;
        alert('Maui')
        verifyPassword();
    } else {
        alert("Cuenta invalida. Favor de volver a cargar la pagina e ingresar cuenta existente.")
    }
} */

/* function passwordVerification(){
    var password = prompt(`Hola ${cuentas[accountNumber].nombre}\nIngresa tu contrasena:`);
    verifyPassword(password)
} */

/* function verifyPassword() {
    let isTrue = true;
    let accountPassword = prompt(`Hola ${cuentas[accountNumber].nombre}\nIngresa tu contrasena:`);
    while(isTrue){
        if (accountPassword == cuentas[accountNumber].password){
            isTrue=false;
            console.log("true")
            window.location.href = 'menu.html';
            sessionStorage.setItem("accountNumber",accountNumber);
        } else {
            alert("Cuenta invalida. Favor de volver a cargar la pagina e ingresar cuenta existente.")
        }
    }
} */
var accountNumber = sessionStorage.getItem("accountNumber");
var accountNumberA = sessionStorage.getItem("accountNumberA");
console.log(accountNumber)
console.log(cuentas[accountNumber].saldo)

var accountNumberStorage = accountNumber

document.getElementById('welcome').innerHTML = `Bienvenido ${cuentas[accountNumber].nombre}`;

function balance(){
    document.getElementById("resultado").innerHTML = ' ';
    document.getElementById("resultado2").innerHTML = ' ';
    document.getElementById("resultado").innerHTML = `Tu saldo actual es: $${cuentas[accountNumber].saldo}MXN`;
    document.getElementById('money').value = '';
}

function deposit() {
    let isTrue = true;
    let depositAmount = parseInt(document.getElementById('money').value);
    document.getElementById("resultado").innerHTML = ' ';
    document.getElementById("resultado2").innerHTML = ' ';
    while(isTrue){
        if (cuentas[accountNumber].saldo + depositAmount <=900){
            isTrue=false;
            document.getElementById("resultado").innerHTML = `Depositaste: $${depositAmount} MXN<br>`;
            cuentas[accountNumber].saldo = cuentas[accountNumber].saldo + depositAmount;
            document.getElementById("resultado2").innerHTML = `Tu saldo actual es de: $${cuentas[accountNumber].saldo} MXN`;
            document.getElementById('money').value = '';
            var saldoStorage1 = parseInt(cuentas[accountNumber].saldo)
            sessionStorage.setItem("saldoStorage1",saldoStorage1);
            
        } else if (cuentas[accountNumber].saldo + depositAmount > 990){
            document.getElementById("resultado").innerHTML = `No puedes tener mas de $990 MXN en tu cuenta.<br>Tu saldo actual es: $${cuentas[accountNumber].saldo} MXN<br>Intenta depositando una cantidad menor.`
            document.getElementById('money').value = '';
            return
        } else if (document.getElementById('money').value == ''){
            document.getElementById("resultado").innerHTML = `Intenta ingresando un monto.`
            return
        } else{
            document.getElementById('money').value = '';
            return 'exit'
        }
    }
}


function withdraw(){

    let isTrue = true;
    let withdrawalAmount = parseInt(document.getElementById('money').value);
    resultado
    document.getElementById("resultado").innerHTML = ' ';
    document.getElementById("resultado").innerHTML = ' ';
    document.getElementById("resultado2").innerHTML = ' ';
    while(isTrue){
        if (withdrawalAmount <= cuentas[accountNumber].saldo && cuentas[accountNumber].saldo - withdrawalAmount >=10){
            isTrue=false;
            document.getElementById("resultado").innerHTML =  `Retiraste: ${withdrawalAmount}`;
            cuentas[accountNumber].saldo = cuentas[accountNumber].saldo - withdrawalAmount;
            document.getElementById("resultado2").innerHTML = `Tu saldo actual es de: $${cuentas[accountNumber].saldo} MXN`;
            document.getElementById('money').value = '';
            var saldoStorage1 = parseInt(cuentas[accountNumber].saldo)
            sessionStorage.setItem("saldoStorage1",saldoStorage1);
            
        } else if (withdrawalAmount <= cuentas[accountNumber].saldo && cuentas[accountNumber].saldo - withdrawalAmount < 10){
            document.getElementById("resultado").innerHTML = `Tu cuenta no puede quedar con menos de $10 MXN.<br>Tu saldo actual es: $${cuentas[accountNumber].saldo} MXN<br>Ingresa otra cantidad a retirar`;
            document.getElementById('money').value = '';
            return
        } else if (withdrawalAmount > cuentas[accountNumber].saldo) {
            document.getElementById("resultado").innerHTML = `La cantidad a retirar es mayor a tu saldo actual: $${cuentas[accountNumber].saldo} MXN<br>Intenta retirando una cantidad menor.`;
            document.getElementById('money').value = '';
            return
        } else if (document.getElementById('money').value == ''){
            document.getElementById("resultado").innerHTML = `Intenta ingresando un monto.`
            return
        } else{
            document.getElementById('money').value = '';
            return 'exit'
        }
    }
}