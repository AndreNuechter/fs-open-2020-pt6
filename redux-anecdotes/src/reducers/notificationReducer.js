export default (state = '', { type, data }) => {
    switch (type) {
        case 'VOTE':
            return `You voted for "${data.content}"`;
        case 'CREATE':
            return `You created "${data}"`;
        case 'HIDE':
            return '';
        default:
            return state;
    }
};
export const hide = () => ({ type: 'HIDE' });