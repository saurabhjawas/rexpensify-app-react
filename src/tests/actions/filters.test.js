import { 
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters'

import moment from 'moment'

test('should generate set Start Date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })

})

test('should generate set End Date action object', () => {
  const action = setEndDate(moment(100))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(100)
  })
})

test('should generate set text filter action object with provided values', () => {
  const text = 'daFilter'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  })
})

test('should generate set text filter action object with default values', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should generate action object for sort by date', () => {
  const action = sortByDate()
  expect(action).toEqual({ type: 'SORT_BY_DATE'})
})

test('should generate action object for sort by amount', () => {
  const action = sortByAmount()
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT'})  
})