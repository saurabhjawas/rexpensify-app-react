import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePageForTest } from '../../components/AddExpensePage'

import {expenses} from '../fixtures/expenses'

let addExpenseSpy, pushSpy, expense, wrapper

beforeEach(() => {
  addExpenseSpy = jest.fn()
  pushSpy = jest.fn()

  expense = expenses[0]
  wrapper = shallow(
    <AddExpensePageForTest 
      addExpense={addExpenseSpy} 
      history={{
        push: pushSpy
      }}
    />
  )
})

test('should handle AddExpensePage onSubmit', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle AddExpensePage onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)

  expect(addExpenseSpy).toHaveBeenLastCalledWith(expense)
  expect(pushSpy).toHaveBeenLastCalledWith('/')

})

