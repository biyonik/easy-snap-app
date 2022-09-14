module.exports = {
    createSnap: async (parent, {data: {text, userId}}, {SnapModel}) => {
        return new SnapModel({
            text,
            userId
        }).save();
    }
}