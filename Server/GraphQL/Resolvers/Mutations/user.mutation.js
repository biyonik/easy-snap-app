module.exports = {
    createUser: async (parent, {data: {username, password}}, {UserModel}) => {
        const userIsExists = await UserModel.findOne({username: username})
        if (userIsExists) {
            throw new Error('Bu kullanıcı adı daha önce alınmış!')
        }
        
        return await new UserModel({
            username,
            password
        }).save();

    }
}