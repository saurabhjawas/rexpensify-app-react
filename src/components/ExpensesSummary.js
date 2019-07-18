import React from 'react'

import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

import numeral from 'numeral'

const ExpensesSummary = (props) => {
  const expenseWord = props.expenseCount > 1 ? 'expenses' : 'expense'
  const formattedAmount = numeral(props.expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <h3>
        Viewing {props.expenseCount} {expenseWord} totalling {formattedAmount}
      </h3>   
    </div>
  )
}

const mapStateToProps = (state) => ({
  expenseCount: (getVisibleExpenses(state.expenses, state.filters)).length,
  expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
})


export {ExpensesSummary as ExpensesSummaryForTest} 
export default connect(mapStateToProps)(ExpensesSummary)