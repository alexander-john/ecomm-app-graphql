const { v4: uuid } = require("uuid");

exports.Mutation = {
    addGenre: (parent, args, context) => {
        const { input } = args;
        const { name } = input;
        const { genres } = context;

        const newGene = { id: uuid(), name }
        genres.push(newGene)
        return newGene
    }
}