import { BankAccount } from "./BankAccount"

export class NewAccountBank extends BankAccount {

    constructor(name: string, numberAccount: number){
        super(name, numberAccount)
    }

    deposit = (balance: number): number => {
        console.log(`deposito de: ${balance}`)

        this.setBalance(balance) 
        const saldoAcrescimo = this.getBalance() + 10
        const newBalance = this.setBalance(saldoAcrescimo)


        return newBalance 
    }

}