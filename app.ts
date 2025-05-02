abstract class BankAccount {
    name: string
    numberAccount: number
     balance: number = 0 //saldo inicial
    status: boolean = true
    // valores: number

    constructor (name: string, numberAccount: number) {
        this.name = name
        this.numberAccount = numberAccount
    }

    //Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
    deposit = (balance: number): void => {
        console.log(`você depositou ${balance}`)
         this.balance = balance
    }

    //Valor do saldo
    getBalance = (): number => {
        console.log(`Saldo (balance): ${this.balance}`)
        return this.balance
    }





    saque = (balance: number): void => {
        console.log(`Você sacou ${balance}`)
        this.getBalance()
        

        

        
    }

    statusValidate = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error("Conta Inválida");
    }

    
    

}

class PersonalAccount extends BankAccount {
    id_doc: number
    

    constructor(name: string, numberAccount: number, id_doc: number){
        super(name, numberAccount)
        this.id_doc = id_doc
    }

    // getBalance = (balance: number): number => {
    //     return this.balance 
    // }

}


class CompanyAccount extends BankAccount{
    

    constructor(name: string, numberAccount: number){
        super(name, numberAccount)
    }

    deposit = (balance: number): number => {
        console.log(`A empresa depositou ${balance}`)
        return this.balance = balance
    }

}




// const myAccount: BankAccount = new BankAccount('Raphael', 10)
// console.log(myAccount)
// console.log(myAccount.name)
// myAccount.saque()

const personalAccount: PersonalAccount = new PersonalAccount('Maria', 22, 1000)//name, numberAccount, id_doc
personalAccount.saque(44)
console.log(personalAccount)


const companyAccount: CompanyAccount = new CompanyAccount('Pimenta', 555) //name, numberAccount
// console.log(companyAccount)
// companyAccount.deposit(10000)
// console.log('novo', companyAccount)
// companyAccount.getBalance()

