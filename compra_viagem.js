const destinosPossiveis = new Array(
    'São Paulo',
    'Belo Horizonte',
    'Salvador',
    'Bahia',
    'Acre',
    'Espito Santo'
);

console.log('Destinos Possiveis: \n');
// console.log(destinosPossiveis.length);

for(let i = 0; i < destinosPossiveis.length; i++){
    console.log(destinosPossiveis[i]);
}

console.log('\n');

let idade = 17;
const estaAcompanhado = true;
const destino = 'Acre';

let destinoDisponivel = false;

const podeComprar = idade >= 18 || estaAcompanhado;

for(let i = 0; i < destinosPossiveis.length; i++){
    if(destinosPossiveis[i] == destino){
        destinoDisponivel = true;
    }
};

console.log('Destino disponivel: ' + destinoDisponivel);

if(destinoDisponivel && podeComprar){
    console.log('Boa Viagem! \n');
}else{
    console.log('Erro para compra, destino indisponivel ou passageiro menor de idade sem acompanhante :(\n');
};