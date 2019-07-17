import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length !== 0 ? (
        props.expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      ) : (
        <p>No expenses</p>
      )
      
    }
  </div>
)

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export { ExpenseList }

export default connect(mapStateToProps)(ExpenseList)

