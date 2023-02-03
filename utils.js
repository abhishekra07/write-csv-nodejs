const csv = require('fast-csv');
const fs = require('fs');
const path = require('path');

const folderPath = 'files/CSV'

const csvStream = csv.format({ headers: true });


exports.wrietToCsv = async ({ record }) => {
    if(!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, {recursive: true})
    }
    let writableStream = fs.createWriteStream(path.resolve(__dirname, 'files', 'CSV', 'employess.csv'));
    csvStream.pipe(writableStream);
    for(const data of record) {
        csvStream.write({ Name: data.name, Age: data.age, Position: data.position, Department: data.department, Experiance: data.exp });
    }
    writableStream.close();
    csvStream.end();
}