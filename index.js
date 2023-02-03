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
    let response = await wrietToCsv(req.body);
    if(response) {
        res.status(200).json({
            message: 'Successfully added data to CSV file!'
        })
    } else {
        res.status(500).json({
            message: 'Soemthing wrong happened, Please try again!'
        })
    }
    
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`CSV Writer App is running on port ${process.env.PORT || 3000}`)
})