import React from 'react'
import { shallow } from 'enzyme'

import ExpenseListItem from '../../components/ExpenseListItem'

import { expenses } from '../fixtures/expenses'

test('should display expense List item', () => {
  const expense = expenses[0]
  const wrapper = shallow(<ExpenseListItem {...expense} />)

  expect(wrapper).toMatchSnapshot()
})