const express = require("express")
const graphqlHttp = require('express-graphql').graphqlHTTP;
const mongoose = require("mongoose")
const graphqlSchema = require("./src/graphql/schemas")
const graphqlResolvers = require("./src/graphql/resolvers")
const cors = require('cors');
const app = express()
app.use(cors());

app.use(
    "/graphql",
    graphqlHttp({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
    })
)
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
console.log("URL=>", uri);
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("strictQuery", false);
mongoose
    .connect(uri, options)
    .then(() => app.listen(process.env.PORT, console.log("Server is running on port", process.env.PORT)))
    .catch(error => {
        throw error
    })