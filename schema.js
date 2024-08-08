const { gql } = require("apollo-server");

exports.typeDefs = gql `
type Query {
    courses(filter: CoursesFilter): [Course!]!
    course(id: ID!): Course
    genres: [Genre!]!
    genre(id: ID!): Genre
    numOfCourses: Int
    welcome: String
    price: Float
    isTrainer: Boolean
}
input CoursesFilter {
    discount: Boolean
    avgRating: Int
}
type Course {
    id: ID!
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: Genre
    reviews: [Review!]!
}
type Genre {
    id: ID!
    name: String!
    courses(filter: CoursesFilter): [Course!]!
}
type Review {
    id: ID!
    data: String!
    title: String!
    comment: String!
    rating: Int!
}
`