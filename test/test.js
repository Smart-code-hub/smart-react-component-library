var assert = require("assert");
const {entityList,metaData} = require(".//entity");
const { ProcessComponents } = require("../index");
const result = ProcessComponents(entityList[0]);
console.log(result[0])
