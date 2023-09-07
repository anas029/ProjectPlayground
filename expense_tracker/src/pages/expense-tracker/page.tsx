import { useState } from "react"
import { ITransactionProps, useAddTransaction } from "../../hooks/useAddTransaction"
import { useGetTransactions } from "../../hooks/useGetTransactions"


export default function ExpenseTracker() {
    const addTransaction = useAddTransaction()
    const {transactions} = useGetTransactions()
    const [data,setData]=useState<ITransactionProps>({description:'',amount:0,type:'expense'})

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
        await addTransaction(data)
            setData(prev=>({...prev,description:'',amount:''}))
        } catch (error) {
            console.log(error);
            
        }

    }
    const onChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setData(prev=>({...prev,[name]:value}))
    }

    return (
        <div>
            <h1>ExpenseTracker</h1>
            <div>
                <h3>Your balance</h3>
                <p>$0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p>$0.00</p>
            </div>
            <div>
                <h4>Income</h4>
                <p>$0.00</p>
            </div>

            <form onSubmit={onSubmit} >
                <input type="text" name="description" id="" required placeholder="Description" value={data.description} onChange={onChange}/>
                <input type="number" name="amount" id="" required placeholder="Amount" value={data.amount===0?'':data.amount} onChange={onChange}/>
                <div>
                <label htmlFor="expense">Expense</label>
                <input type="radio" name="type" id="expense" value='expense'
                onChange={onChange}
                checked={data.type === 'expense'}/>
                <label htmlFor="income">Income</label>
                <input type="radio" name="type" id="income" value='income'
                onChange={onChange}
                checked={data.type === 'income'}
                />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <hr />

            <div>
                <h3>Transactions</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction)=>(
                            <tr key={transaction.id}>
                                <td>{transaction.description}</td>
                                <td>{parseFloat(transaction.amount)}</td>
                                <td>{transaction.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
    
