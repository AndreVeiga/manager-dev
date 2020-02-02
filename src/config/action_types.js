const types = {
	login: {
		loading: 'LOADING',
		error: 'ERROR',
		typing: {
			email: 'TYPING_EMAIL',
			password: 'TYPING_PASSWORD'
		},
		success: 'SUCCESS'
	}
}

const trigger = (type, payload = null) => ({ type, payload })

export { types, trigger }