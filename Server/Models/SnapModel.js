const mongoose = require('mongoose');
const {Schema} = mongoose;

const SnapSchema = Schema({
    text: {
        type: String,
        minlength: [1, '{PATH} alanı minimum {MINLENGTH} karakter uzunluğunda olmalıdır!'],
        unique: [true, '{PATH} alanı benzersiz olmalıdır. Bu kullanıcı adı kullanılmakta!'],
    },
    userId : {
        type: Schema.Types.ObjectId
    },
    createdAt: {
        type:Date,
        default: Date.now
    }
});

const SnapModel = mongoose.model('Snap', SnapSchema);
module.exports = SnapModel;