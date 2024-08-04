const { ApolloServer, gql } = require("apollo-server");

const courses = [
    {
        id: "book-06",
        name: "TypeScript Basics",
        description: "TypeScript Basics for beginners",
        price: 599.99,
        discount: false,
        genreId: "cat-01"
    },
    {
        id: "book-07",
        name: "GraphQL Basics",
        description: "GraphQL Basics for beginners",
        price: 499.99,
        discount: true,
        genreId: "cat-01"
    },
    {
        id: "book-08",
        name: "NextJS Basics",
        description: "NextJS Basics for beginners",
        price: 599.99,
        discount: false,
        genreId: "cat-01"
    }
]

const typeDefs = gql `
type Query {
    courses: [Course!]!
    welcome: String
    numOfCourses: Int
    price: Float
    isTrainer: Boolean
}
type Course {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
}
`

const resolvers = {
    Query: {
        courses: () => {
            return allCourses
        },
        welcome: () => {
            return null;
        },
        numOfCourses: () => {
            return 12;
        },
        price: () => {
            return 1465.98;
        },
        isTrainer: () => {
            return true;
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url}) => console.log(`Server is running at ${url}`));