const fs = require('fs');
const csvtojson = require('csvtojson');

const filePath = '../../../nodejs/file_to_read.csv';
const writedFilePath = '../../../nodejs/message.txt';

const readStream = fs.createReadStream(filePath);

const writeStream = fs.createWriteStream(writedFilePath);


csvtojson()
  .fromStream(readStream)
  .subscribe(json => {
    const formatedFile = JSON.stringify(json).replace('[', '').replace(']', '').replace('}', '},\n');
    writeStream.write(formatedFile);
  });
