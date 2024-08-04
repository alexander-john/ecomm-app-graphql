const { ApolloServer, gql } = require("apollo-server");

const allCourses = [
    {
        name: "TypeScript Basics",
        description: "TypeScript Basics for beginners",
        price: 599.99,
        discount: false
    },
    {
        name: "GraphQL Basics",
        description: "GraphQL Basics for begineers",
        price: 499.99,
        discount: true
    },
    {
        name: "NextJS Basics",
        description: "NextJS Basics for beginners",
        price: 599.99,
        discount: false
    }
]

const typeDefs = gql `
type Query {
    courses: [String!]!
    welcome: String
    numOfCourses: Int
    price: Float
    isTrainer: Boolean
}
`

const resolvers = {
    Query: {
        courses: () => {
            return ['TypeScript', 'GraphQL', 'NextJS', 'Angular']
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