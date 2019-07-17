// HOC (Higher OOrde Component) - A react component that renders other component 
  // Reuse code
  // Render hijacking
  // prop manipulation
  // Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>
      Info
    </h1>
    <p>This info is {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please DO NOT share</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthetication = (WrappedComponent) => (
  (props) => {
    return (<div>
      {props.isAuth ? <WrappedComponent {...props} /> : <h1>ACCESS DENIED... AS YOU ARE NOT AUTHENTICATED</h1>}
    </div>)
  }
)

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthetication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info={'Shava Shava'} />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={false} info={'Shava Shava'} />, document.getElementById('app'))