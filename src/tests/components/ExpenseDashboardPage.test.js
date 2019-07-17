import React from 'react'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

import { shallow } from 'enzyme'


test('should generate Expense dashboard component', () => {
  const wrapper = shallow(<ExpenseDashboardPage />)
  expect(wrapper).toMatchSnapshot()
})