const router = require('express').Router();
const axios = require('axios')

const api_key = require('../key')
let currentURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`

router.get('/movies', (req, res) => {
    axios
        .get(currentURL)
        .then((results) => {
            let inTheaterPosters = results.data.results

            return res.render('main/url', { posters: inTheaterPosters });

        })
        .catch((err) => {
            console.log(err);
        })


})


module.exports = router;