const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors());  
app.use(express.json());

const projectRoutes = require("./routes/projectRoutes")


//defining HTTP requests 
app.get("/", (req, res) => {
    res.send({"name": "Janaye App"}) // Should be json format
});

app.use('/api', projectRoutes);

app.listen(3001, () => {console.log("Server is running on port 3001!")})