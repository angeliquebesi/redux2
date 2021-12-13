const counterReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1
  }
  if (action.type === "DECREMENT") {
    return state - 1
  }
  if (action.type === "INCREMENT10") {
    return state + 10
  }
  if (action.type === "DECREMENT10") {
    return state -10
  }
  if (action.type === "RESET") {
    return 0
  }

  return state;
}

export default counterReducer;