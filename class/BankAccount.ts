export abstract class BankAccount {
    readonly name: string
    readonly numberAccount: number
    private balance: number = 0 //saldo inicial
    private status: boolean = true

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
        //console.log('meu saldo', this.balance)
        return this.balance
    }

    //Valor do saldo
    getBalance = (): number => {
        console.log(`Saldo: ${this.balance}`)
        return this.balance
    }




    // Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
    saque = (valorSaque: number): number => {
        console.log(`Você solicitou um saque de: ${valorSaque}`)

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