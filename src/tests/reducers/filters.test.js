import filterReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter value', () => {
  const state = filterReducer(undefined, {
    type: '@@INIT'
  })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})


test('Should set sort by to amount', () => {
  const state = filterReducer(undefined, {
    type: 'SORT_BY_AMOUNT'
  })

  expect(state.sortBy).toBe('amount')
})

test('should set sort by to date', ( ) => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filterReducer(currentState, {
    type: 'SORT_BY_DATE'
  })

  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const testText = 'Some text here'
  const currentState= {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filterReducer(currentState, {
    type: 'SET_TEXT_FILTER',
    text: testText
  })

  expect(state.text).toBe(testText)
})

test('should set start date filter', () => {
  const testStartDate = moment(123123123)
  const currentstate = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const state = filterReducer(currentstate, {
    type: 'SET_START_DATE',
    startDate: testStartDate
  })

  expect(state.startDate).toBe(testStartDate)
})

test('should set end date filter', () => {
  const testEndDate = moment(2342)
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const state = filterReducer(currentState, {
    type: 'SET_END_DATE',
    endDate: testEndDate
  })

  expect(state.endDate).toBe(state.endDate)
})