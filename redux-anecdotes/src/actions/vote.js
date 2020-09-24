import dbService from '../services/db.js';

const incrementVotes = anecdote => ({
    ...anecdote,
    votes: anecdote.votes + 1
});

export default anecdote => {
    return async dispatch => {
        const data = await dbService.putVote(incrementVotes(anecdote));
        dispatch({
            type: 'VOTE',
            data
        });
    };
};