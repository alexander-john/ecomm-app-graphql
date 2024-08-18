exports.Query = {
    courses: (parent, args, { db }) => {
        let filteredCourses = db.courses;
        const { filter } = args;
        let { reviews } = context;
        if(filter) {
            const { discount, avrRating } = filter;
            if(discount) filteredCourses = filteredCourses.filter(
                product => product.discount
            );
            if([1, 2, 3, 4, 5].includes(avrRating)){
                filteredCourses = filteredCourses.filter(
                    item => {
                        let sum = 0;
                        let numOfReviews = 0;
                        db.reviews.forEach((review) => {
                            if(review.courseId === item.id){
                                sum += review.rating;
                                numOfReviews++;
                            }
                        })
                        const avgCourseRating = sum / numOfReviews;
                        return avgCourseRating >= avgRating;
                    })
            }
        }
        return filteredCourses;
    },
    course: (parent, args, { db }) => {
        const courseId = args.id;
        const courses = context.courses;
        const course = db.courses.find(item => item.id ===
            courseId);
            if (!course) return null;
            else return course;
    },
    genres: (parent, args, { db }) => db.genres,
    genre: (parent, args, { db }) => {
        const catId = args.id;
        const genres = context.genres;
        const genre = db.genres.find(item => item.id === catId);
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