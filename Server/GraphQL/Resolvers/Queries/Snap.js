const Snap = {
    user: async (parent, args, {UserModel}) => {
        return await UserModel.findById(parent.userId);
    }
}

module.exports = Snap;