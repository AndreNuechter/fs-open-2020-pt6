const initialState = {
    good: 0,
    ok: 0,
    bad: 0
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GOOD':
            return state;
        case 'OK':
            return state;
        case 'BAD':
            return state;
        case 'ZERO':
            return state;
        default:
            return state;
    }
};