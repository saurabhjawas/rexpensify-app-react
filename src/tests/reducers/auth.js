import authReducer from '../../reducers'

test('should set defualt state', () => {
  const state = authReducer(undefined, {
    type: '@@INIT'
  })

  expect(state).toEqual({})
})

test('should set uid on login', () => {
  const state = {}
  const uid = 'sdfsdfsgwr35'
  
  authReducer(state,{
    type: 'LOGIN',
    uid
  })

  expect(state).toEqual({uid})
})


test('should unset', () => {
  
  const uid = 'sdfsdfsgwr35'
  const state = {uid}

  authReducer(state,{
    type: 'LOGOUT'
  })

  expect(state).toEqual({})
})