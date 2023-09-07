import { collection, onSnapshot, orderBy, query, serverTimestamp, where, FieldValue  } from 'firebase/firestore'
import {total} from '../configs/totalBalance'
import { useState, useEffect } from 'react'
import { db } from '../configs/firebase.config'
import { useGetUserInfo } from './useGetUserInfo'


export interface Transaction {
    id: string;
    description: string;
    amount: string;
    type: 'income' | 'expense';
    createdAt: FieldValue;
    userID:string
  }
  
interface UseGetTransactions {
    transactions: Transaction[];
  }

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const transactionCollectionRef = collection(db, 'transactions')
  const { userID } = useGetUserInfo()
    
  useEffect(() => {
    // Function to unsubscribe from the snapshot listener
    let unsubscribe: (() => void) | undefined

    
    const getTransactions = async () => {
        
      try {
        const queryTransactions = query(
          transactionCollectionRef,
          where("userID", "==", userID),
          orderBy("createdAt")
        )
            
        // Subscribe to snapshot changes and update the state
        unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
            const docs: Transaction[] = []


          snapshot.forEach((doc) => {
            const data = doc.data()
            const id = doc.id
            
            // Define the structure of your transaction data here
            const transaction: Transaction = {
                id,
                description: data.description,
                amount: data.amount,
                type: data.type,
                userID:data.userID,
                createdAt: serverTimestamp(),
              }
  
              docs.push(transaction)
          })

          setTransactions(docs)
        })
      } catch (error) {
        console.error("Error fetching transactions:", error)
      }
    }

    // Call the function to start fetching transactions when userID changes or on component mount
    getTransactions()

    // Return a cleanup function to unsubscribe from the snapshot listener
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [userID]) // Only re-run the effect when userID changes
  const result = total(transactions)
  return { transactions ,result}
}

