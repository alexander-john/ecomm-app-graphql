const { ApolloServer} = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Course } = require("./resolvers/Course");
const { Genre } = require("./resolvers/Genre");
const { courses, genres } = require("./database");

const server = new ApolloServer({ typeDefs, resolvers: 
    { Query, Course, Genre }, context: { courses, genres }});

server.listen().then(({ url}) => console.log(`Server is running at ${url}`));