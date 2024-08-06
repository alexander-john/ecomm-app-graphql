const { course } = require("../database");

exports.Genre = {
    courses: (parent, args, context) => {
        const genreId = parent.id;
        return courses.filter(item => item.genreId === genreId);
    }
}