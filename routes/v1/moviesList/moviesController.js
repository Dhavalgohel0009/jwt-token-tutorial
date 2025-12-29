import {moviesModal} from '../../../modals/moviesModal/moviesModal.js';
export const getMovieList = async (req, res, next) => {
    try {
        const reqQuery = req.query;
        const page = parseInt(reqQuery.page) || 1;
        const limit = reqQuery.limit < 200 ? parseInt(reqQuery.limit) || 50 : 50;
        const skip = (page - 1) * limit;

        const movieList = await moviesModal.find({}, {
                title: 1,
                cast: 1,
                directors: 1,
                poster: 1,
                _id: 0 
            })
            .skip(skip)
            .limit(limit);
        return res.status(200).json({
            success: true,
            data: movieList
        })
    } catch (error) {
        console.log("At getMovieList : ", error);
    }
}