const Query = {
    user: (parent, args, context) => {
        return {
            name: 'Ahmet',
            surname: 'Altun'
        }
    }
};

module.exports = {
    Query
}