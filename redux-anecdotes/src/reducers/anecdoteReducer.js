import dbService from '../services/db.js';

const getId = () => (100000 * Math.random()).toFixed(0);
const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0
    };
};

export default (state = [], { type, data }) => {
    switch (type) {
        case 'VOTE':
            return state.map((anecdote) => {
                if (anecdote.id === data.id) return { ...anecdote, votes: anecdote.votes + 1 };
                return anecdote;
            });
        case 'CREATE':
            const newAnecdote = asObject(data);
            dbService.postNew(newAnecdote);
            return [...state, newAnecdote];
        case 'INIT':
            return data;
        default:
            return state;
    }
};
export const init = data => ({ type: 'INIT', data });
export const vote = (id, content) => ({ type: 'VOTE', data: { id, content } });
export const create = data => ({ type: 'CREATE', data });