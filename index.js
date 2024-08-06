const { ApolloServer} = require("apollo-server");
const { typeDefs } = require("./schema");
const { courses, genres } = require(",/database");

const resolvers = {
    Genre: {
        courses: (parent, args, context) => {
            const genreId = parent.id;
            return courses.filter(item => item.genreId === genreId);
        }
    },
    Course: {
        genre: (parent, args, context) => {
            const genreId = parent.genreId;
            return genres.find(item => item.id === genreId);
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url}) => console.log(`Server is running at ${url}`));