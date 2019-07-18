import React from 'react'

import {ExpensesSummaryForTest} from '../../components/ExpensesSummary'

import {shallow} from 'enzyme'


test('should render correctly for 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummaryForTest
      expenseCount={1}
      expensesTotal={235}
    />
  )

  expect(wrapper).toMatchSnapshot()
})

test('should render correctly for 2 expenses', () => {
  const wrapper = shallow(
    <ExpensesSummaryForTest
      expenseCount={2}
      expensesTotal={238}
    />
  )

  expect(wrapper).toMatchSnapshot()
})