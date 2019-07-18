import getExpensesTotal from '../../selectors/expenses-total'

import { expenses } from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
  const totalExpense = getExpensesTotal([])
  expect(totalExpense).toBe(0)
})

test('should correctly add up a single expense', () => {
  const totalExpense = getExpensesTotal([ expenses[1] ])
  expect(totalExpense).toBe(expenses[1].amount)
})

test('should correctly add up multiple expenses', () => {
  const totalExpense = getExpensesTotal(expenses)
  expect(totalExpense).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
})