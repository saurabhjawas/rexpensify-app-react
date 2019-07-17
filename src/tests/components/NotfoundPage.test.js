import React from 'react'
import { shallow } from 'enzyme'

import NotfoundPage from '../../components/NotfoundPage'

test('should generate a not found page component', () => {
  const wrapper = shallow(<NotfoundPage />)
  expect(wrapper).toMatchSnapshot()
})