/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-06-17 14:49:09
 * @LastEditors: Ankang
 * @LastEditTime: 2021-07-05 00:00:42
 */
import ReactDOM from 'react-dom'
// import App from './basic/App'
// import App from './class_style/App'
// import App from './props_states/App'
import App from './cart/App'
// import App from './lifetimes/App'
// import App from './communication/ref/App'
// import App from './communication/context/App'
// import App from './enhancered_conponent/RenderProps'
// import App from './enhancered_conponent/HighOrderComponent'

// import App from './redux-cart/view/Index'
// import store from './redux-cart/store'
// import { Provider } from 'react-redux'

// import App from './react-router/App'
import {
  BrowserRouter as Router
} from 'react-router-dom'

// ReactDOM.render(
//   <Provider store={store}>
//     <App></App>
//   </Provider>,
//   document.querySelector('#root')
// )
ReactDOM.render(
  <Router>
    <App></App>
  </Router>,
  document.querySelector('#root')
)