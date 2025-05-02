abstract class BankAccount {
    name: string
    numberAccount: number
    private balance: number = 0 //saldo inicial
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


    getBalance = (): number => {
        console.log(`Saldo (balance): ${this.balance}`)
        return this.balance
    }





    saque = (): void => {
        console.log('Você sacou')
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
    // valor: number


    constructor(name: string, numberAccount: number){
        super(name, numberAccount)
    }

    // deposit = (valor: number): number => {
    //     // if(this.valor > 0 ) {
    //     //     console.log(`A empresa depositou R$: ${this.valor} `)
    //     //     return this.valor = valor
    //     // }
        
    //     // throw new Error('não foi possivel depositar')
    //     return this.valor = valor
    // }

    // getBalance = (): void => {

    // }


    // deposit: (balance: number): void => {
    //     console.log(`você depositou ${balance}`)
    // }

  


}




// const myAccount: BankAccount = new BankAccount('Raphael', 10)
// console.log(myAccount)
// console.log(myAccount.name)
// myAccount.saque()

const personalAccount: PersonalAccount = new PersonalAccount('Maria', 22, 1000)
// console.log(personalAccount)
// personalAccount.deposit(600)
// console.log('novo saldo:', personalAccount)
// personalAccount.getBalance()


const companyAccount: CompanyAccount = new CompanyAccount('Pimenta', 555)
console.log(companyAccount)
companyAccount.deposit(10000)
console.log('novo', companyAccount)

