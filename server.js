const express = require('express')
const path = require('path')
const axios = require('axios').default
const ejs = require('ejs');
const PORT = process.env.PORT || 3002
const app = express()
app.use(express.json({ extended: true }))

app.set("view-engine", ejs)

app.get('/', (req, res) => {
    const URL = "https://api.chucknorris.io/jokes/random";
    axios.get(URL).then(response=>{
        res.render("index.ejs", {chuckData: response.data})
    })
    .catch(err=>console.error(err));
})

app.listen(PORT, () => {
    console.log("Server is running on Port 3002")
})