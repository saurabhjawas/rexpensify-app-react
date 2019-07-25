import React from 'react'

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogOut } from '../actions/auth'


export const Header = (props) => (
   <header>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="is-active">dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <button onClick={props.startLogOut}>LogOut</button>
   </header>
)

const mapDispatchToProps = (dispatch) => ({
   startLogOut: () => {
      dispatch(startLogOut())
   }
})

export default connect(undefined, mapDispatchToProps)(Header)