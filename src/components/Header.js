import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogOut } from '../actions/auth'


export const Header = (props) => (
   <header className="header">
      <div className="content-container">
         <div className="header__content" >
            <Link className="header__title" to="/dashboard">
               <h1>Expensify</h1>
            </Link>
            <button className="button button--logout" onClick={props.startLogOut}>Logout</button>
         </div>
      </div>
   </header>
)

const mapDispatchToProps = (dispatch) => ({
   startLogOut: () => {
      dispatch(startLogOut())
   }
})

export default connect(undefined, mapDispatchToProps)(Header)