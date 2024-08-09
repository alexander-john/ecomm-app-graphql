const { v4: uuid } = require("uuid");

exports.Mutation = {
    addGenre: (parent, args, context) => {
        const { input } = args;
        const { name } = input;
        const { genres } = context;

        const newGene = { id: uuid(), name }
        genres.push(newGene)
        return newGene
    }, 
    addCourse: (parent, args, context) => {
        const { input } = args;
        const { name, description, price, discount, genreId } = input;
        const { courses } = context;

        const newCourse = { id: uuid(), name, description, price,
            discount, genreId }
            courses.push(newCourse)
            return newCourse
    }
}