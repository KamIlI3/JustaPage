const express = require('express');
const CoursesModel = require('../../db/models/coursesModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const courses = await CoursesModel.find();
        res.json(courses);
    }catch (error){
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;