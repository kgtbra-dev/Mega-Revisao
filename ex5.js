let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let n3 = Number(prompt("Digite o terceiro número: "));

let maior;
let meio;
let menor;

if ( n1 >= n2 && n1 >= n3 ) {
    maior = n1 ;
} else if( n2 >= n1 && n2 >= n3 ) {
    maior = n2;
} else {
    maior = n3;
}

if ( n1 <= n2 && n1 <= n3) {
    menor = n1;
} else if( n2 <= n1 && n2 <= n3 ) {
    menor = n2;
} else {
    menor = n3;
}

if ( n1 != maior && n1 != menor ) {
    meio = n1;
} else if( n2 != maior && n2 != menor ) {
    meio = n2;
} else {
    meio = n3;
}

console.log(`Maior : ${maior}`);
console.log(`Meio : ${meio}`);
console.log(`Menor : ${menor}`);