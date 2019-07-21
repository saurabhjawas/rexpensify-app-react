import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePageForTest } from '../../components/EditExpensePage'

import { expenses } from '../fixtures/expenses'

let startRemoveExpenseSpy, pushSpy, startEditExpenseSpy, expense, wrapper

beforeEach(() => {
  startRemoveExpenseSpy = jest.fn()
  pushSpy = jest.fn()
  startEditExpenseSpy  = jest.fn()

  expense =  expenses[1]

  wrapper = shallow(
    <EditExpensePageForTest
    startRemoveExpense={startRemoveExpenseSpy}
    startEditExpense={startEditExpenseSpy}
    history={{ push: pushSpy }}
    expense={expense}
    match={{
      params: { id: expense.id }
    }}
    />
  )
})


test('should render edit expense page', () => {
  expect(wrapper).toMatchSnapshot()
})


test('should handle edit expense spy', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)

  expect(startEditExpenseSpy).toHaveBeenLastCalledWith({
    id: expense.id,
    updates: expense
  })

  expect(pushSpy).toHaveBeenLastCalledWith('/')
})


test('should handle remove expense spy', () => {
  wrapper.find('button').simulate('click')

  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expense.id })

  expect(pushSpy).toHaveBeenLastCalledWith('/')
})