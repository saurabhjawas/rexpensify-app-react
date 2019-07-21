import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

class EditExpensePage extends React.Component {
  onClick = (e) => {
    this.props.startRemoveExpense({ id: this.props.match.params.id })
    this.props.history.push('/')
  }

  onSubmit = (expense) => {

    this.props.startEditExpense({
      id: this.props.expense.id,
      updates: expense
    })

    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        Editting the expense with id of {this.props.match.params.id}
        <ExpenseForm
          expense={this.props.expense}  
          onSubmit={this.onSubmit}
        />
  
        <button
          onClick={this.onClick}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(({ id }) => (id === props.match.params.id))
})

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: ({id}) => {
    dispatch(startRemoveExpense({id}))
  },
  startEditExpense: ({id, updates}) => {
    dispatch(startEditExpense({ id, updates }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)

export { EditExpensePage as EditExpensePageForTest }

/*
const EditExpensePage = (props) => {
  // console.log(props)
  return (
    <div>
      Editting the expense with id of {props.match.params.id}
      <ExpenseForm
        expense={props.expense}

        onSubmit={(expense) => {
          // console.log('got the expense updates..', props.expense.id, expense)
          props.dispatch(editExpense({
            id: props.expense.id,
            updates: expense
          }))

          props.history.push('/')
        }}

      <button
        onClick={(e) => {
          props.dispatch(removeExpense({ id: props.match.params.id }))
          props.history.push('/')
        }}
      >
        Remove
      </button>
    </div>
  )
}
*/