const {ApolloServer} = require('apollo-server');
const gateway = require('./schemas/organization');

async function run() {
    const {schema, executor} = await gateway.load();
    const server = new ApolloServer({
        schema,
        executor,
    });

    const serverInfo = await server.listen(8080);
    console.log('Server is up at', serverInfo.url);
}

run();
