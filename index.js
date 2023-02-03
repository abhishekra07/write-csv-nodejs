const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const {
    wrietToCsv
} = require('./utils')

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.post('/api/writeToCsv', async (req, res) => {
    await wrietToCsv(req.body);
    res.status(200).json({
        message: 'Request Successfully added for Batch Processing!!!'
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`CSV Writer App is running on port ${process.env.PORT || 3000}`)
})