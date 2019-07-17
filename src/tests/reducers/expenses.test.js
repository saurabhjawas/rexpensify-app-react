import expensesReducer from '../../reducers/expenses'
import moment from 'moment'
import { expenses } from '../fixtures/expenses'

test('should set defualt state', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT'
  })

  expect(state).toEqual([])
})

test('should add new expense', () => {
  const testExpense = {
    id: '112',
    description: 'Guma',
    note: '',
    amount: 1905,
    createdAt: 0
  }

  const state = expensesReducer(expenses, {
    type: 'ADD_EXPENSE',
    expense: testExpense
  })

  expect(state.length).toBe(expenses.length + 1)
  expect(state).toEqual([ ...expenses, testExpense ])
})



test('should remove an expense', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: '2'
  })

  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should NOT remove an expense', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: 'asdasd2'
  })

  expect(state).toEqual(expenses)
})


test('should update the expense', () => {
  const expenseUpdateData = {
    description: 'Credit Trap',
    note: '',
    amount: 450000000,
    createdAt:  moment(0).add(31,'years').valueOf()
  }

  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '3',
    updates: expenseUpdateData
  })

  expect(state[2]).toEqual({
    ...expenseUpdateData,
    id: '3'
  })
})


test('should NOT update the expense', () => {
  const expenseUpdateData = {
    description: 'Credit Trap',
    note: '',
    amount: 450000000,
    createdAt:  moment(0).add(31,'years').valueOf()
  }

  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '3DFSFSDF',
    updates: expenseUpdateData
  })

  expect(state).toEqual(expenses)
})