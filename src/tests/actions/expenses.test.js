import { addExpense, editExpense, removeExpense, startAddexpense } from '../../actions/expenses'
import {expenses} from '../fixtures/expenses'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk])
import database from '../../firebase/firebase'

test('should setup remove expense option object', () => {
  const action = removeExpense({id: '123abc'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should setup edit expense option object', () => {
  const action = editExpense({
    id: '123asd',
    updates: {
      note: 'New note Value'
    }
  })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123asd',
    updates: {
      note: 'New note Value'
    }
  })
});

test('should setup add expense option with provided values ', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was rent for last month'
  };
  const action = addExpense(expenses[2]);
  expect(action).toEqual({ 
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});


test('should add expense to database and store', (done) => {
  const store = createMockStore({})

  const expenseData = {
    description: 'chapadganju!', 
    amount: '21',  
    note: 'Paisa',
    createdAt: 1231231
  }

  store.dispatch(startAddexpense(expenseData)).then (() => {
    const actions = store.getActions()
    
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')    
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})


test('should add expense with default to database and store', (done) => {
  const store = createMockStore({})

  const expenseDefaults = {
    description: '', 
    amount: 0,  
    note: '',
    createdAt: 0
  }

  store.dispatch(startAddexpense({})).then (() => {
    const actions = store.getActions()
    
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')    
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults)
    done()
  })
})

// test('should setup add expense option with default values', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   })
// })