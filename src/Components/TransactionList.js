import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const {transaction} = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map(transaction => (<Transaction key = {transaction.id} transaction={transaction}/>))}
        
      </ul>
    </>
  )
}

export default TransactionList
