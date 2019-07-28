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
        <div className="page-header">
          <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
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