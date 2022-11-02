const initialState = {
	friends: [
		{
			id: 1,
			imageUrl:
				'https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg',
			name: 'Itachi',
		},
		{
			id: 2,
			imageUrl:
				'https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg',
			name: 'Kisame',
		},
		{
			id: 3,
			imageUrl:
				'https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg',
			name: 'Orochimaru',
		},
	],
}

const sidebarReducer = (state = initialState, action) => {
	return state
}

export default sidebarReducer
