import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'

import { expenses } from '../fixtures/expenses'

test('should render expense list with expenses', () => {
  const wrappper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrappper).toMatchSnapshot()
})


test('Should render expense lidt with empty message', () => {
  const wrappper = shallow(<ExpenseList expenses={[]} />)
  expect(wrappper).toMatchSnapshot()
})