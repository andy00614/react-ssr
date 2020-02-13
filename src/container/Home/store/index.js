const initalState = {
  lists: []
}
export default (state = initalState,action) => {
  if(action.type === 'changeList') {
    const lists = action.payload
    console.log(lists)
    return {
      ...state,
      lists
    }
  }

  return state
}