import  { Transaction } from '../hooks/useGetTransactions'
export const total=(transactions:Transaction[])=>{
    const result={
        balance : 0.0,
         income : 0.0,
         expense : 0.0
    } 

    transactions.forEach(transaction=>{
        if (transaction.type === 'expense'){
            result.expense+= Number(transaction.amount)
        }else{
            result.income+= Number(transaction.amount)
        }
        result.balance= result.income - result.expense

    })
    
    return result
}