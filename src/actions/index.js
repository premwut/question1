export const onInputChange = (payload) => {
    const type = payload.option === 'isPrime' ? 'CHECK_ISPRIME' : 'CHECK_ISFIBONACCI';
    return async (dispatch) => {
        await dispatch({ type: 'CHANGE_INPUT', payload: payload.number });
        await dispatch({ type, payload: payload.number }); 
    }
}

export const onOptionChange = (payload) => {
    const type = payload.option === 'isPrime' ? 'CHECK_ISPRIME' : 'CHECK_ISFIBONACCI';
    console.log(payload.option);
    return async (dispatch) => {
        await dispatch({ type: 'CHANGE_OPTION', payload: payload.option });
        await dispatch({ type, payload: payload.number }); 
    }
}
