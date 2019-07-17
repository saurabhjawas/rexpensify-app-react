import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


test('should setup remove expense option object', () => {
  const action = removeExpense({id: '123abc'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should setup edit expense option object', () => {
  const action = editExpense({
    id: '123asd',
    updates: {
      note: 'New note Value'
    }
  })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123asd',
    updates: {
      note: 'New note Value'
    }
  })
});

test('should setup add expense option with provided values ', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was rent for last month'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({ 
    type: 'ADD_EXPENSE',
    expense: {
     ...expenseData,
     id: expect.any(String)
    }
  });
});

test('should setup add expense option with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})