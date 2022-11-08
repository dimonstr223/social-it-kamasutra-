import store from './redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderUI = state => {
	root.render(
		<BrowserRouter>
			<Provider store={store}>
				<App
					state={state}
					dispatch={store.dispatch.bind(store)}
					store={store}
				/>
			</Provider>
		</BrowserRouter>
	)
}

rerenderUI(store.getState())

store.subscribe(() => {
	const state = store.getState()
	rerenderUI(state)
})
