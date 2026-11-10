export class Cliente {
    id: number;
    nome: string; 
    CPF: string;
    RG: string;
    anoNascimento: number;

    constructor(id: number, nome: string, cpf: string, rg: string, anoNascimento: number){
        this.id = id;
        this.nome = nome;
        this.CPF = cpf;
        this.RG = rg;
        this.anoNascimento = anoNascimento;
    }

    getNome(): string {
        return this.nome;
    }

    getCPF(): string {
        return this.CPF;
    }

    getRG(): string {
        return this.RG;
    }

    getAnoNascimento(): number {
        return this.anoNascimento;
    }

    getIdade(): number {
        return 2026 - this.anoNascimento;
    }
}
