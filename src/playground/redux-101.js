import { createStore } from 'redux'

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
}) 

// reducer
  // 1. Pure function: don't refer OR change the consts and variables outside scope  it's scope
  // 2. Never state change and action
  // 3. 

const countReducer = (state = { count: 11 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
        return { 
          count: action.count 
        }      
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(`Here's a change`)
})

console.log('Below is the store')


console.log(store.getState())


console.log('dispatching actions on store')
store.dispatch(incrementCount({incrementBy: 18}))

console.log(store.getState())

store.dispatch(incrementCount())

console.log(store.getState())

store.dispatch(resetCount())
console.log(store.getState())

store.dispatch(decrementCount())

console.log(store.getState())

store.dispatch(decrementCount({ decrementBy: 80 }))

console.log(store.getState())

store.dispatch(setCount({count: 123}))

console.log(store.getState())

