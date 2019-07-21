import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePageForTest } from '../../components/AddExpensePage'

import {expenses} from '../fixtures/expenses'

let startAddexpenseSpy, pushSpy, expense, wrapper

beforeEach(() => {
  startAddexpenseSpy = jest.fn()
  pushSpy = jest.fn()

  expense = expenses[0]
  wrapper = shallow(
    <AddExpensePageForTest 
      startAddexpense={startAddexpenseSpy} 
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

  expect(startAddexpenseSpy).toHaveBeenLastCalledWith(expense)
  expect(pushSpy).toHaveBeenLastCalledWith('/')

})

