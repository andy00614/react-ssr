import axios from 'axios'
export function getList() {
  return (dispatch) => {
    axios.get('http://39.105.148.23:8000/').then(res => {
      console.log(res.data.data)
      dispatch({
        type: 'changeList',
        payload: res.data.data
      })
    })
  }
}