export const countReducer = (
  state = { count: 0, registered: false },
  action
) => {
  const { type, value } = action;
  switch (type) {
    case "INCREMENT": {
      let newState = { ...state, count: state.count + value };
      return newState;
    }
    case "DECREMENT": {
      let newState = { ...state, count: state.count - value };
      return newState;
    }
    case "REGISTERED": {
      let newState = { ...state, registered: !state.registered };
      return newState;
    }
    default: {
      return state;
    }
  }
};
