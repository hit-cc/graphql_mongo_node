const Users = require('../../models/users')

const userResolver = {
    users: async () => {
        try {
            const usersFatched = await Users.find();
            return usersFatched.map(user => {
                return {
                    ...user._doc,
                    _id: user.id,
                }
            })

        } catch (error) {
            console.error("users list error", error);
            throw error
        }
    },

    getUserById: async (arg) => {
        try {
            if (arg && !arg?.id) return;
            const user = await Users.findById({ _id: arg?.id })
            return user;
        } catch (error) {
            console.error("getuserbyid catch error", error);
            throw error
        }
    },

    createUser: async (args) => {
        console.log("args==", args);
        try {
            const { firstname, lastname, city, state, country } = args?.user
            const user = new Users({
                firstname, lastname, city, state, country
            })
            const newUser = await user.save()
            return { ...newUser._doc, _id: newUser.id }
        } catch (error) {
            console.error("createUser error", error);
            throw error
        }
    },

    updateUser: async (args) => {
        console.log("updated user id=>>", args);
        try {
            if (args && !args?.user._id) throw new Error("unable to get id");
            const { firstname, lastname, city, state, country } = args.user
            const updatedUser = await Users.findByIdAndUpdate({ _id: args?.user._id },
                {
                    $set: {
                        firstname: firstname,
                        lastname: lastname,
                        city: city,
                        state: state,
                        country: country
                    }
                }, { new: true })
            console.log("updated userr", updatedUser);
            return updatedUser;
        } catch (error) {
            console.error("updateUser catch error", error);
            throw error
        }
    },

    deleteUser: async (args) => {
        console.log("args=>", args);
        try {
            if (args && !args.id) return
            await Users.findOneAndDelete({ _id: args.id }).then((err, data) => {
                if (err) throw err
                return { message: "user deleted succesfully!" }
            })
        } catch (error) {
            console.error("deleteUser catch error", error)
            throw error
        }
    }
}

module.exports = userResolver