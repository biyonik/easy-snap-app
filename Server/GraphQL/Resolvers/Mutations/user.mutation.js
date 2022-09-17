const bcrypt = require('bcrypt');
const {token} = require('../../../Helpers/Token/jwt.helper');
module.exports = {
    createUser: async (parent, {data: {username, password}}, {UserModel}) => {
        const userIsExists = await UserModel.findOne({username: username})
        if (userIsExists) {
            throw new Error('Bu kullanıcı adı daha önce alınmış!')
        }
        
        const newUser = await new UserModel({
            username,
            password
        }).save();

        return {
            token: token.generate(newUser, '1h')
        }
    },
    signIn: async (parent, {data: {username, password}}, {UserModel}) => {
        const userIsExists = await UserModel.findOne({username});
        if (!userIsExists) {
            throw new Error('Böyle bir kullanıcı bulunamadı!')
        }

        const validPassword = await bcrypt.compare(password, userIsExists.password);
        if (!validPassword) throw new Error('Parola hatalı!');

        const tokenData = {
            id: userIsExists._id,
            username: userIsExists.username,
            createdAt: userIsExists.createdAt
        };
        return {
            token: token.generate(tokenData, '1h')
        }

    }
}
