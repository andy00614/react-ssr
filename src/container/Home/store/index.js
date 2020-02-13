const initalState = {
  lists: []
}
export default (state = initalState,action) => {
  if(action.type === 'changeList') {
    const lists = action.payload
    return {
      ...state,
      lists
    }
  }

  return state
}