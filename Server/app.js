const express = require('express');
require('dotenv').config();
const {ApolloServer} = require('apollo-server-express')
const {importSchema} = require('graphql-import');

const resolvers = require('./GraphQL/Resolvers/index');

async function initializeApolloServer() {
    const server = new ApolloServer({
        typeDefs: importSchema('./GraphQL/Types/schema.graphql'),
        resolvers: resolvers
    });

    const app = express();
    await server.start();
    server.applyMiddleware({app});

    app.listen({port: 4000}, () => {
        console.log(`Sunucu http://127.0.0.1:4000${server.graphqlPath}`);
    })
}

initializeApolloServer();