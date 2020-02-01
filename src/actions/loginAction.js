
export const teste = () => (dispatch) => {

    console.log('Dentro da action ')

    dispatch({
        type: 'LOADING',
        payload: true
    }) 
}