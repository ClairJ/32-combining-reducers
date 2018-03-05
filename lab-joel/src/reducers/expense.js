export default (state={}, action) => {
  let {type, payload} = action;

  switch (type) {
  case 'CATEGORY_CREATE': return { ...state, [payload._id]: []};
  case 'CATEGORY_DELETE':
  {
    let intialState = {...state};
    delete intialState[payload.categoryId];
    return intialState;
  }
  case 'EXPENSE_CREATE':
  {
    let intialState = {...state };
    intialState[payload.categoryId].push(payload);
    return intialState;
  }
  case 'EXPENSE_UPDATE':
  {
    let intialState = {...state};
    intialState[payload.categoryId] = intialState[payload.categoryId]
      .map(exp => exp._id === payload._id ? payload : exp);
    return intialState;
  }

  case 'EXPENSE_DELETE':
  {
    let intialState = {...state};
    intialState[payload.categoryId] = intialState[payload.categoryId]
      .filter(exp => exp._id !== payload._id);
    return intialState;
  }
  case 'EXPENSE_RESET':
  {
    let intialState = {...state};
    intialState[payload.categoryId] = [];
    return intialState;
  }
  default: return state;
  }
};


// export default (state=[], action) => {
//   let {type, payload} = action;
//
//   switch(type) {
//   case 'CATEGORY_CREATE': return [...state, payload];
//   case 'CATEGORY_UPDATE': return state.map(cat => cat._id === payload._id ? payload : cat);
//   case 'CATEGORY_DELETE': return state.filter(cat => cat._id !== payload._id);
//   case 'CATEGORY_RESET': return [];
//   default: return state;
//   }
// };
