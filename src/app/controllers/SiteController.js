
const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {
        //Example get data from database with callback
        // Course.find({}, function (err, courses) {
        //     if(!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
        //     }
        // });

        //Get data from database with Promise
        Course.find({})   
            .then(courses => {
                res.render('home', { 
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next);
        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
