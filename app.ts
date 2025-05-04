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

    //Alterar o valor do saldo privado
    setBalance = (myBalance: number): number => {
        this.balance = myBalance
        console.log('meu saldo', this.balance)
        return this.balance
    }

    //Valor do saldo
    getBalance = (): number => {
        console.log(`Saldo (balance): ${this.balance}`)
        return this.balance
    }




    // Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
    saque = (valorSaque: number): number => {
        console.log(`Você solicitou um saque de: ${valorSaque}`)
        //console.log(this.getBalance())
        console.log('saldo total', this.balance)

        if(this.status && (this.balance > valorSaque)) {

            const valorRestante = this.balance - valorSaque
            this.balance = valorRestante

            console.log(`saldo restante`, this.balance)
            return this.balance
            
        } else {
            console.log('Você não possui saldo suficiente')
        }
        

        throw new Error('Conta invalida')

        
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
}


class CompanyAccount extends BankAccount{
    

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


class NewAccountBank extends BankAccount {

    constructor(name: string, numberAccount: number){
        super(name, numberAccount)
    }

    deposit = (balance: number): number => {
        console.log(`deposito de: ${balance}`)
        const newDeposit = this.setBalance(balance) 
        const saldoAcrescimo = this.getBalance() + 10
        const newBalance = this.setBalance(saldoAcrescimo)
        console.log('newDeposit:', newDeposit )
        console.log('saldoAcrescimo:', saldoAcrescimo )
        console.log('newBalance:', newBalance )
        // teste = newBalance
        // const newBalance = this.getBalance()
        // console.log('saldo atual:', teste)


        return newBalance 
    }

}


const personalAccount: PersonalAccount = new PersonalAccount('Maria', 22, 1000)//name, numberAccount, id_doc
//console.log(personalAccount)
// personalAccount.saque()

// personalAccount.deposit(200)

// console.log(personalAccount)
// personalAccount.saque(5)

// console.log(personalAccount)


const companyAccount: CompanyAccount = new CompanyAccount('Pimenta', 555) //name, numberAccount
// console.log(companyAccount) //Conta zerada
// companyAccount.deposit(45)
// console.log('novo', companyAccount) //conta com Novo saldo

// companyAccount.getLoan(25)
// console.log(companyAccount) //
// // companyAccount.getBalance()
// companyAccount.saque(5)
// companyAccount.getBalance()


const newAccountBank: NewAccountBank = new NewAccountBank('Pimenta, Raphael', 9999)
console.log(newAccountBank)
newAccountBank.deposit(100)
console.log(newAccountBank)

