import React from 'react'
import { connect } from 'react-redux'

import { addExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense))
    this.props.addExpense(expense)
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
  addExpense: (expense) => {
    dispatch(addExpense(expense))
  }
})

export { AddExpensePage as AddExpensePageForTest }

export default connect(undefined, mapDispatchToProps)(AddExpensePage)