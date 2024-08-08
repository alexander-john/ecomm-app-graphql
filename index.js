const { ApolloServer} = require("apollo-server");
const { typeDefs } = require("./schema");
const { Mutation } = require("./resolvers/Mutation");
const { Query } = require("./resolvers/Query");
const { Course } = require("./resolvers/Course");
const { Genre } = require("./resolvers/Genre");
const { courses, genres, reviews } = require("./database");

const server = new ApolloServer({ typeDefs, 
    resolvers: { Query, Mutation, Course, Genre }, 
    context: { courses, genres, reviews }});

server.listen().then(({ url}) => console.log(`Server is running at ${url}`));