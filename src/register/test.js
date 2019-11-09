'use strict';

const fs = require('fs');
const path = require('path')

let rawdata = fs.readFileSync(path.join(__dirname, 'template.json'))
let student = JSON.parse(rawdata);

student.userInfo[0].percentages = [85,53,63,23]
console.log(student);