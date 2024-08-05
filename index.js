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

const genres = [
    { id: 'cat-01', name: 'Technical' },
    { id: 'cat-02', name: 'History' }
]

const typeDefs = gql `
type Query {
    courses: [Course!]!
    course(id: ID!): Course
    genres: [Genre!]!
    genre(id: ID!): Genre
    numOfCourses: Int
    welcome: String
    price: Float
    isTrainer: Boolean
}
type Course {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
}
type Genre {
    id: ID!
    name: String!
}
`

const resolvers = {
    Query: {
        courses: () => courses,
        course: (parent, args, context) => {
            const courseId = args.id;
            const course = courses.find(item => item.id ===
                courseId);
                if (!course) return null;
                else return course;
        },
        genres: () => genres,
        genre: (parent, args, context) => {
            const catId = args.id;
            const genre = genres.find(item => item.id === catId);
            if(!genre) return null;
            else return genre;
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