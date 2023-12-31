//come creare un array randomico 

//dichiaro un array
let array = [];

//dichiaro il numoer degli elementi nell'array
const ArrayElementNumber = 10;

//dichiaro il numero massimo che sarà presente nell'array (in questo caso da 0 a 100)
const ArrayMaxNumber = 100;


//ciclo in cui partendo da zero, per tutta la lunghezza del numero degli elementi dell'array(10),
//di un passo alla volta, inserisce un numero randomico (math.random) e intero (math.floor)
//fino al numero massimo contenuto nell'array cioè 100
//così si crea un array randomico!!!
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
