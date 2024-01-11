
const fetch = require('node-fetch');

exports.handler = async () => {
    try {
        const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto';

        // AWS Lambda may not have internet access by default, so you need to use a VPC or a service like VPC NAT Gateway.
        // For simplicity, let's assume you are running this code locally.

        const response = await fetch(POKE_API);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};