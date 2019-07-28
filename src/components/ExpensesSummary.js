import React from 'react'

import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

import { Link } from 'react-router-dom'

import numeral from 'numeral'

const ExpensesSummary = (props) => {
  const expenseWord = props.expenseCount > 1 ? 'expenses' : 'expense'
  const formattedAmount = numeral(props.expensesTotal / 100).format('$0,0.00')
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{props.expenseCount}</span> {expenseWord} totalling <span>{formattedAmount}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  expenseCount: (getVisibleExpenses(state.expenses, state.filters)).length,
  expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
})


export {ExpensesSummary as ExpensesSummaryForTest} 
export default connect(mapStateToProps)(ExpensesSummary)