const express = require('express');
const router = express.Router();

//define routes with functions connecting to the query database here 

// to get a project 

router.get('/get_project', async (req, res) => {
    try {
        const projectID = req.body; 
        const ret = await getbyProjectID(projectID)
        res.json(ret)
    
    } catch (err) {
    res.status(500).send(err);
    console.log(err);

}
});



module.exports = router;
