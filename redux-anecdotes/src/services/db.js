const baseUrl = 'http://localhost:3001/anecdotes';

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        return await response.json();
    },
    async postNew(data) {
        const response = await fetch(baseUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }
};