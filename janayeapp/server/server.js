const express = require('express')
const cors = require('cors');
const app = express();
const projectRoutes = require('../server/routes/projectRoutes')

app.use(cors());  



//defining HTTP requests 

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

app.listen(5000, () => {console.log("Server is running on port 5000!")})