import React from 'react'
import { shallow } from 'enzyme'
import {LoginPage} from '../../components/LoginPage'

test('should render Login page', () => {
  const wrapper = shallow(<LoginPage />)

  expect(wrapper).toMatchSnapshot()
})

test('should call startLogin on buttonclick', () => {
  const startLoginSpy = jest.fn()
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />)

  wrapper.find('button').simulate('click', {})

  expect(startLoginSpy).toHaveBeenLastCalledWith({})
})