/**
 * Query Resolvers
 */
const Query = require('./Queries/QueryResolver');

/**
 * Mutation Resolvers
 */
const Mutation = require('./Mutations/index');

module.exports = {
    Query,
    Mutation
}