let array = [];
const ArrayElementNumber = 10;
const ArrayMaxNumber = 100;

for (let i = 0; i < ArrayElementNumber; i++) {
    array.push(Math.floor(Math.random()*ArrayMaxNumber));
};

console.log(array);

/*
modo più semplice

array.forEach(numero => {
    if(numero % 2 == 0) {
        console.log(`${numero} è pari«`)
    } else {
        console.log(`${numero} è dispari«`)
    }
});*/

/* modo diverso

array.forEach(numero => {
    let tipo = '';
    if (numero % 2 == 0) {
    tipo = "pari";        
    }else {
        tipo = "dispari"
    }
    console.log(`${numero} è ${tipo}`);
});*/

/* modo con meno codice possibile*/

array.forEach(numero => {
    const tipo = numero % 2 == 0 ? 'pari' : 'dispari';
    console.log(`${numero} è ${tipo}`)
});
