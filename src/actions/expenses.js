import uuid from 'uuid';
import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddexpense = (expenseData = {}) => {
  return (dispatch) => {

    const { 
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData

    const expense = { description, note, amount, createdAt }

    return database.ref('expenses').push(expense).then((snapshot) => {
      dispatch(addExpense({
        id: snapshot.key,
        ...expense
      }))
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({ 
  type: 'REMOVE_EXPENSE',
  id
 })

//  EDIT_EXPENSE
export const editExpense = ({ id, updates }) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
