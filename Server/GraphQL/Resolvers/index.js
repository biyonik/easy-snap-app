/**
 * Query Resolvers
 */
const Query = require('./Queries/QueryResolver');
const Snap = require('./Queries/Snap');
const User = require('./Queries/User');

/**
 * Mutation Resolvers
 */
const Mutation = require('./Mutations/index');

module.exports = {
    Query,
    Snap,
    User,
    Mutation
}