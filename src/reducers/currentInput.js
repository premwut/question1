export default (state={number:'', option: 'isPrime'}, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return { ...state, number: action.payload };
        case 'CHANGE_OPTION':
            return { ...state, option: action.payload };
        default:
            return state;
    }
}