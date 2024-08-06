const { ApolloServer} = require("apollo-server");
const { typeDefs } = require("./schema");
const { courses, genres } = require(",/database");

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
    },
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