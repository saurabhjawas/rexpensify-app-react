import React from 'react'
import  { shallow } from 'enzyme'

import moment from 'moment'

import { expenses } from '../fixtures/expenses'

import ExpenseForm from '../../components/ExpenseForm'

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
  const expense = expenses[1]
  const  wrapper = shallow(<ExpenseForm expense={expense} />)

  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()

  expect(wrapper.state('error').length).toBe(0)

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })

  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = 'New Description'

  expect(wrapper.state('description')).toBe('')

  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'This is some note!'
  const wrapper = shallow(<ExpenseForm />)

  expect(wrapper.state('note')).toBe('')

  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  })

  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
  const value = '123.54' // a valid amount
  const  wrapper = shallow(<ExpenseForm />)

  expect(wrapper.state('amount')).toBe('')

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })

  expect(wrapper.state('amount')).toBe(value)
})

test('should set amount if invalid input', () => {
  const value = '123.5a4' // a valid amount
  const  wrapper = shallow(<ExpenseForm />)

  expect(wrapper.state('amount')).toBe('')

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })

  expect(wrapper.state('amount')).toBe('')
})

test('Should call onSubmit prop for valid form submission', () => {
  const expense = expenses[0]

  const {
    description,
    amount,
    createdAt,
    note
  } = expense
  
  const onSubmitSpy = jest.fn()
  
  const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy} />)

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description,
    amount,
    createdAt,
    note
  })
})

test('Should set new date on data chage', () => {
  const now = moment()

  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);

  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on focus change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper.state('calendarFocused')).toBe(false);
  
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});

  expect(wrapper.state('calendarFocused')).toBe(focused);

  // expect(wrapper.find('SingleDatePicker').prop('focused')).toBe(focused)

})