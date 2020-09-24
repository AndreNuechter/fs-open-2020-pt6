import dbService from '../services/db.js';

const getId = () => (100000 * Math.random()).toFixed(0);
const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0
    };
};

export default anecdote => {
    return async dispatch => {
        const data = await dbService.postNew(asObject(anecdote));
        dispatch({
            type: 'CREATE',
            data
        });
    };
};