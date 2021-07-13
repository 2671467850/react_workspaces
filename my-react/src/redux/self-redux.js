/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-19 19:48:15
 * @LastEditors: Ankang
 * @LastEditTime: 2021-06-19 20:16:16
 */
const defaultState = {
  count:0
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'add':
      return {
        count: state.count + 1
      }
    case 'minus':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const createStore = (reducer) => {
  let state = undefined
  let subscribes = []

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
    subscribes.forEach(fn => fn())
  }

  function subscribe(fn) {
    subscribes.push(fn)
  }

  dispatch({
    type:'a;dsjkhfsjkfsdad'
  })

  return {
    dispatch,
    getState,
    subscribe
  }
}

const store = createStore(reducer)

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch({
  type:'add'
})
store.dispatch({
  type:"add"
})