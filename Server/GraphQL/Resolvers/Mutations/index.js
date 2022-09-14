const userMutation = require('./user.mutation');
const snapMutation = require('./snap.mutation');

const Mutation = {
    ...userMutation,
    ...snapMutation
};

module.exports = Mutation;