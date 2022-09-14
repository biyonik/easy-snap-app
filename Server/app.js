const express = require('express');
require('dotenv').config();
const {ApolloServer} = require('apollo-server-express')
const {importSchema} = require('graphql-import');
const mongoose = require('mongoose');

const resolvers = require('./GraphQL/Resolvers/index');

// models
const UserModel = require('./Models/UserModel');

async function initializeApolloServer() {
    const server = new ApolloServer({
        typeDefs: importSchema('./GraphQL/schema.graphql'),
        resolvers,
        context: {
            UserModel
        }
    });

    const app = express();

    mongoose.connect(`${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`, {
        useNewUrlParser: true
    })
        .then(_ => console.log('Veritabanı bağlantısı başarılı'))
        .catch(err => console.log(err));

    await server.start();
    server.applyMiddleware({app});

    app.listen({port: 4000}, () => {
        console.log(`Sunucu http://127.0.0.1:4000${server.graphqlPath}`);
    })
}

initializeApolloServer();