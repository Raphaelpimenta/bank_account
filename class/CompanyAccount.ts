import { BankAccount } from "./BankAccount"

export class CompanyAccount extends BankAccount{
    

    constructor(name: string, numberAccount: number){
        super(name, numberAccount)
    }

    deposit = (balance: number): number => {
        console.log(`A empresa depositou ${balance}`)
        const newBalance = this.setBalance(balance)
        console.log(newBalance)
        return newBalance
        
    }

    getLoan = (valor: number): number => {
        console.log(`Valor do empréstimo ${valor}`)

        //Apenas contas com o status true podem fazer empréstimo
        if(this.statusValidate()) {
           
            const valorEmprestimo = this.getBalance() + valor
            
            const newBalance = this.setBalance(valorEmprestimo)
            console.log('novo saldo apos emprestimo', newBalance)

            return newBalance
        }

        throw new Error('Conta inválida para empréstimo')
    }



}