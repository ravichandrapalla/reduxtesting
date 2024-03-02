export const increment = (payload) => {
  return {
    type: "INCREMENT",
    value: payload,
  };
};

export const decrement = (payload) => {
  return {
    type: "DECREMENT",
    value: payload,
  };
};
export const registered = () => {
  return {
    type: "REGISTERED",
  };
};
