const { v4: uuid } = require("uuid");

exports.Mutation = {
    addGenre: (parent, args, { db }) => {
        const { input } = args;
        const { name } = input;
        const { genres } = context;

        const newGene = { id: uuid(), name }
        db.genres.push(newGene)
        return newGene
    }, 
    addCourse: (parent, args, { db }) => {
        const { input } = args;
        const { name, description, price, discount, genreId } = input;
        const { courses } = context;

        const newCourse = { id: uuid(), name, description, price,
            discount, genreId }
            db.courses.push(newCourse)
            return newCourse
    },
    addReview: (parent, args, { db }) => {
        const { input } = args;
        const { date, title, comment, rating, courseId } = input;
        const { reviews } = context;
        const newReview = { id: uuid(), date, title, comment, rating, courseId }
        db.reviews.push(newReview)
        return newReview
    }
}