import { useState } from "react"
import { ITransactionProps, useAddTransaction } from "../../hooks/useAddTransaction"
import { useGetTransactions } from "../../hooks/useGetTransactions"
import { useGetUserInfo } from "../../hooks/useGetUserInfo"
import { signOut } from "firebase/auth"
import { auth } from "../../configs/firebase.config"
import { useNavigate } from "react-router-dom"


export default function ExpenseTracker() {
    const addTransaction = useAddTransaction()
    const {transactions, result} = useGetTransactions()
    const [data,setData]=useState<ITransactionProps>({description:'',amount:0,type:'expense'})
    const {name, profilePhoto} = useGetUserInfo()
    const navigate = useNavigate()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
        await addTransaction(data)
            setData(prev=>({...prev,description:'',amount:0}))
        } catch (error) {
            console.log(error);
            
        }

    }
    const onChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setData(prev=>({...prev,[name]:value}))
    }
    

    const signUserOut= async()=>{
        try {
            await signOut(auth)
            localStorage.removeItem("auth")
            navigate('/')
        } catch (error) {
            console.log(error);
            
        }
        
    }

    return (
        <div>
            <h1>{name}'s ExpenseTracker</h1>
            <div>
                <h3>Your balance</h3>
                <p>{result.balance<0?'-':''}${result.balance *-1}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p>${result.expense}</p>
            </div>
            <div>
                <h4>Income</h4>
                <p>${result.income}</p>
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
            {profilePhoto && 
            <div>
                <img src={profilePhoto} alt="Profile photo" />
                <div><button type="button"
                onClick={signUserOut}
                >Sign out</button></div>
            </div>
            }
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
    
