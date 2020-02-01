const defaultState = {
  isLoad: false,
  error: null
}

const login = (state = defaultState, action) => {
  
  console.log('Aqui no reducer')

  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoad: true
      }

    default:
      return state
  }
}

export default login