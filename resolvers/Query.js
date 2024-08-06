const { courses, genres } = require("../database");

exports.Query = {
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