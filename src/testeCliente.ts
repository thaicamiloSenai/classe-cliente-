import {Cliente} from './models/cliente.js';

const cliente1 = new Cliente(1, 'André Solicito', '068.753.540-98', '41.068.896-4', 1980);

const cliente2 = new Cliente(2, 'Janete de Oliveira', '501.764.310-98', '20.360.374-6', 1970);

const cliente3 = new Cliente(3, 'José de Almeida', '862.373.890-08', '42.172.423-7', 1965);

console.log("TESTANDO CLIENTE 1:");
console.log("Nome:", cliente1.getNome());
console.log("CPF:", cliente1.getCPF());
console.log("RG:", cliente1.getRG());
console.log("Ano Nasc.:", cliente1.getAnoNascimento());
console.log("Idade:", cliente1.getIdade());

console.log("TESTANDO CLIENTE 2:");

console.log("Nome:", cliente2.getNome());
console.log("CPF:", cliente2.getCPF());
console.log("RG:", cliente2.getRG());
console.log("Ano Nasc.:", cliente2.getAnoNascimento());
console.log("Idade:", cliente2.getIdade());

console.log("TESTANDO CLIENTE 3:");
console.log("Nome:", cliente3.getNome());
console.log("CPF:", cliente3.getCPF());
console.log("RG:", cliente3.getRG());
console.log("Ano Nasc.:", cliente3.getAnoNascimento());
console.log("Idade:", cliente3.getIdade());
