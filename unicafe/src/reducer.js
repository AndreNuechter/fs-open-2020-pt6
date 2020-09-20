const initialState = {
    good: 0,
    ok: 0,
    bad: 0
};
const incrementProp = (state, key) => ({ ...state, [key]: state[key] + 1 });

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GOOD':
            return incrementProp(state, 'good');
        case 'OK':
            return incrementProp(state, 'ok');
        case 'BAD':
            return incrementProp(state, 'bad');
        case 'ZERO':
            return { ...initialState };
        default:
            return state;
    }
};