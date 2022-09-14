const Query = {
    user: async (parent, args, {UserModel}) => {
        return await UserModel.findById(args.id);
    },
    users: async (parent, args, {UserModel}) => {
        return await UserModel.find({}).sort({'createdAt': 'desc'})
    }
};

module.exports = Query;