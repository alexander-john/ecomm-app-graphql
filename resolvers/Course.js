const { genres } = require("../database");

exports.Course = {
    genre: (parent, args, context) => {
        const genreId = parent.genreId;
        return genres.find(item => item.id === genreId);
    }
}