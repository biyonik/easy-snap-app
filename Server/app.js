const express = require('express');
require('dotenv').config();
const {ApolloServer} = require('apollo-server-express')
const {importSchema} = require('graphql-import');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const resolvers = require('./GraphQL/Resolvers/index');

// models
const UserModel = require('./Models/UserModel');
const SnapModel = require('./Models/SnapModel');

async function initializeApolloServer() {
    const server = new ApolloServer({
        typeDefs: importSchema('./GraphQL/schema.graphql'),
        resolvers,
        context: ({requestObject}) => ({
            UserModel,
            SnapModel,
            activeUser: requestObject.activeUser
        })
    });

    const app = express();

    mongoose.connect(`${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`, {
        useNewUrlParser: true
    })
        .then(_ => console.log('Veritabanı bağlantısı başarılı'))
        .catch(err => console.log(err));

    await server.start();
    app.use(async (requestObject, responseObject, nextFunction) => {
        const token = requestObject.headers.authorization;
        if (token && token !== 'null') {
            try {
                const activeUser = await jwt.verify(token, process.env.JWT_SECRET_KEY);
                request.activeUser = activeUser;
            } catch (e) {
                throw new Error(e);
            }
        }
        nextFunction();
    })
    server.applyMiddleware({app});

    app.listen({port: 4000}, () => {
        console.log(`Sunucu http://127.0.0.1:4000${server.graphqlPath}`);
    })
}

initializeApolloServer();