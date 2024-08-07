exports.Query = {
    courses: (parent, args, context) => {
        const courses = context.courses;
        return courses;
    },
    course: (parent, args, context) => {
        const courseId = args.id;
        const courses = context.courses;
        const course = courses.find(item => item.id ===
            courseId);
            if (!course) return null;
            else return course;
    },
    genres: (parent, args, context) => {
        const genres = context.genres;
        return genres;
    },
    genre: (parent, args, context) => {
        const catId = args.id;
        const genres = context.genres;
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