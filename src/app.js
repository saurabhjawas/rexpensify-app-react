import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'


import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'
import { addExpense, editExpense } from './actions/expenses'
// import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

const unsubscribe = store.subscribe(() => {  
  console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters))
  // const state = store.getState()
  // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  // console.log(visibleExpenses)
})

store.dispatch(addExpense({
  description: 'Water Bill', 
  note: 'for the month of March 2019', 
  amount: 120, 
  createdAt: 1200,
}))

store.dispatch(addExpense({
  description: 'Gas Bill', 
  note: 'for the month of March 2019', 
  amount: 1420, 
  createdAt: 1000,
}))

store.dispatch(addExpense({
  description: 'Rent Bill', 
  note: 'for the month of March 2019', 
  amount: 109500, 
  createdAt: 1200 + 59*24*60*60*1000,
}))


// console.log(store.getState())
const jsx  =  (
  <Provider store={store}>
    <AppRouter />
  </Provider >
)

ReactDOM.render(jsx, document.getElementById('app')) 