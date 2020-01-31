export const changeValue = (e) => {
    console.log('na action')

    return {
        type: 'teste',
        payload: e.target.value
    }
}
