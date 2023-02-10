const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }

  type Users {
    _id:ID!
    firstname:String!
    lastname:String!
    city:String!
    state:String!
    country:String!
  }

  input ArticleInput {
    title: String!
    body: String!
  }

  input UserInput {
    _id:ID
    firstname : String!
    lastname : String!
    city : String!
    state : String!
    country : String!
  }

  type Query {
    articles:[Article!]
    users:[Users!]
    getUserById(id:ID!):Users
  }

  type Mutation {
    createArticle(article:ArticleInput): Article
    createUser(user:UserInput): Users
    updateUser(user:UserInput): Users
    deleteUser(id:ID!):Users
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)