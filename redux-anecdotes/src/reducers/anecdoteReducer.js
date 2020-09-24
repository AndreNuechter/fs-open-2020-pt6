export default (state = [], { type, data }) => {
    switch (type) {
        case 'VOTE':
            return [...state.filter(a => a.id !== data.id), data]
        case 'CREATE':
            return [...state, data];
        case 'INIT':
            return data;
        default:
            return state;
    }
};
export { default as init } from '../actions/init.js';
export { default as create } from '../actions/create.js';
export { default as vote } from '../actions/vote.js';