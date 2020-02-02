const types = {
    login: {
        loading: 'LOADING',
        error: 'ERROR',
        typing: {
            email: 'TYPING_EMAIL',
            password: 'TYPING_PASSWORD'
        }, 
        success: 'SUCESS'
    }
}

const trigger = (type, payload = null) =>  ({ type, payload })

export { types, trigger }