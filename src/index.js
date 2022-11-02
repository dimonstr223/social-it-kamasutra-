import store from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderUI = state => {
	root.render(
		<BrowserRouter>
			<App state={store.getState()} dispatch={store.dispatch.bind(store)} />
		</BrowserRouter>
	)
}

rerenderUI(store.getState())

store.subscribe(rerenderUI)
