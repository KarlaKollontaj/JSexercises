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
    array.push(Math.floor(Math.random())*ArrayMaxNumber);    
};

console.log(array);

//ora facciamo la somma degli elementi randomici dell'array

//dichiaro la somma uguale a zero
//let somma = 0;

//per ogni numero dentro l'array fai la somma che è somma, cioè 0, più il numero in questione
/*array.forEach(numero => {
    somma = somma + numero;
});
console.log(array);*/