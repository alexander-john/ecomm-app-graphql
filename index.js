const { ApolloServer} = require("apollo-server");
const { typeDefs } = require("./schema");
const { courses, genres } = require(",/database");

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url}) => console.log(`Server is running at ${url}`));