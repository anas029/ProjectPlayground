import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../configs/firebase.config'
import {useGetUserInfo} from './useGetUserInfo'
export interface ITransactionProps{
    description:string,
    amount:number,
    type:'income'|'expense'
}

export const useAddTransaction=()=>{
    const transactionCollectionRef = collection (db, 'transactions')
    
    const {userID} = useGetUserInfo()
    const addTransaction = async ({description, amount, type}:ITransactionProps)=>{
        
        await addDoc(transactionCollectionRef, {
            userID,
            description,
            amount,
            type,
            createdAt: serverTimestamp(),
          });    
    }
    return addTransaction
}