import { CompanyAccount } from "./class/CompanyAccount"
import { NewAccountBank } from "./class/NewAccont"



const companyAccount: CompanyAccount = new CompanyAccount('Raphael', 555) //name, numberAccount
console.log(companyAccount) //Conta zerada
companyAccount.deposit(50)
companyAccount.saque(10) 
companyAccount.getLoan(100) //Empréstimo
companyAccount.getBalance() //Saldo Atual
console.log('novo', companyAccount) //conta com Novo saldo




const newAccountBank: NewAccountBank = new NewAccountBank('Pimenta, Raphael', 9999)
console.log(newAccountBank)
newAccountBank.deposit(100)
newAccountBank.saque(30)
newAccountBank.getBalance()
console.log(newAccountBank)

