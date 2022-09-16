const Query = {
    user: async (parent, args, {UserModel}) => {
        return await UserModel.findById(args.id);
    },
    users: async (parent, args, {UserModel}) => {
        return await UserModel.find({}).sort({'createdAt': 'desc'})
    },
    activeUser: async(parent, args, {activeUser, UserModel}) => {
        if (!activeUser) return null;
        return await UserModel.findOne({username: activeUser.username});
    },
    snap: async (parent, args, {SnapModel}) => {
        return await SnapModel.findById(args.id)
    },
    snaps: async (parent, args, {SnapModel}) => {
        return await SnapModel.find({}).sort({'createdAt': 'desc'})
    }
};

module.exports = Query;