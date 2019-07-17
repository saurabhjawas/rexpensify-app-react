import React from 'react'
import moment from 'moment'
// import { connect } from 'react-redux'
// import { removeExpense } from '../actions/expenses'

import numeral from 'numeral'

import { Link } from 'react-router-dom'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')}
      -
      {moment(createdAt).format('DD MMMM YYYY')}</p>
  </div>
)



// export default connect()(ExpenseListItem)
export default ExpenseListItem

// {id, description, amount, createdAt, dispatch}