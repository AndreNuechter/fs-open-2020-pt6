export default (state = '', { type, filter }) => {
    switch (type) {
        case 'UPDATE_FILTER':
            return filter;
        default:
            return state;
    }
};
export const update = (filter) => ({ type: 'UPDATE_FILTER', filter });