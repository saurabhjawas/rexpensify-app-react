import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length !== 0 ? (
          props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))
        ) : (
          <div className="list-item list-item--message">
          <span>No expenses</span>
          </div>
        )
        
      }
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export { ExpenseList }

export default connect(mapStateToProps)(ExpenseList)

