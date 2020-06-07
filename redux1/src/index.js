import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './components/app'
import reducers from './reducers'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
       <App/>
    </Provider>,
    document.querySelector('#root')
)