import React from 'react'
import { connect } from 'react-redux'

import { startAddexpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense))
    this.props.startAddexpense(expense)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddexpense: (expense) => {
    dispatch(startAddexpense(expense))
  }
})

export { AddExpensePage as AddExpensePageForTest }

export default connect(undefined, mapDispatchToProps)(AddExpensePage)