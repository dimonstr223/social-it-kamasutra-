import store from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

let rerenderUI = state => {
	const root = ReactDOM.createRoot(document.getElementById('root'))
	root.render(
		<BrowserRouter>
			<App
				state={store.getState()}
				addPost={store.addPost.bind(store)}
				updatePostText={store.updatePostText.bind(store)}
			/>
		</BrowserRouter>
	)
}

rerenderUI(store.getState())

store.subscribe(rerenderUI)
