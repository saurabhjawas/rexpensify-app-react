import React from 'react'
import { shallow} from 'enzyme'

import { ExpenseListFiltersForTest } from '../../components/ExpenseListFilters'

import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'


let wrapper, setTextFiltersSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy

beforeEach(() => {
  setTextFiltersSpy = jest.fn()
  sortByDateSpy = jest.fn()
  sortByAmountSpy = jest.fn()
  setStartDateSpy = jest.fn()
  setEndDateSpy = jest.fn()

  wrapper = shallow(
    <ExpenseListFiltersForTest
      setStartDate={setStartDateSpy}
      setEndDate={setEndDateSpy}
      setTextFilter={setTextFiltersSpy}
      sortByAmount={sortByAmountSpy}
      sortByDate={sortByDateSpy}
      filters={filters}
    />
  )
})

test('should render ExpenseListFilters correctlr', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should Handle text change', () => {
  const text = 'Some text'
  wrapper.find('input').simulate('change', {
    target: {value: text}
  })

  expect(setTextFiltersSpy).toHaveBeenLastCalledWith(text)
})

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  })
  const sortValue = 'date'
  wrapper.find('select').simulate('change', {
    target: {value: sortValue}
  })

  expect(sortByDateSpy).toHaveBeenLastCalledWith()
})

test('should sort by amount', () => {
  const sortValue = 'amount'
  wrapper.find('select').simulate('change', {
    target: {value: sortValue}
  })

  expect(sortByAmountSpy).toHaveBeenLastCalledWith()
})

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years')
      , endDate = moment(0).add(8, 'years')
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})

  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)
})


test('should handle date focus change', () => {
  const focusedInputStart = 'startDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(focusedInputStart)

  expect(wrapper.state('calendarFocused')).toBe(focusedInputStart)

  const focusedInputEnd = 'endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(focusedInputEnd)

  expect(wrapper.state('calendarFocused')).toBe(focusedInputEnd)
})
