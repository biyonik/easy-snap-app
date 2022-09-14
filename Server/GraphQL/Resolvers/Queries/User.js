const User = {
    snaps: async (parent, args, {SnapModel}) => {
        return await SnapModel.find({userId: parent.id})
    }
}

module.exports = User;