const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        country: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
)


module.exports = mongoose.model('Users', UserSchema)