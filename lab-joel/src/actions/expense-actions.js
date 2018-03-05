import uuid from 'uuidv4';

export const expenseCreate = expense => {
  expense._id = uuid();
  expense.timestamp = new Date();
  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };
};

export const categoryUpdate = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const categoryDelete = expense => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
});

export const categoryReset = () => ({type: 'EXPENSE_RESET'});
