const userResolver = require('./userResolver');
const articleResolver = require('./articleResolver');
module.exports = {
    articles: articleResolver.articles,
    createArticle: articleResolver.createArticle,
    users: userResolver.users,
    createUser: userResolver.createUser,
    updateUser: userResolver.updateUser,
    deleteUser: userResolver.deleteUser,
    getUserById: userResolver.getUserById
}