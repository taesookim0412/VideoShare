import fs = require('fs')
import path = require('path')
import mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect("mongodb://localhost:27017/groupshare", {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true});
    const model_path = path.join(__dirname, './../models');
    fs.readdirSync(model_path).forEach((file) => {
        if (file.indexOf('.ts') > 0 || file.indexOf('.js') > 0) {
            require(model_path + "/" + file)()
        }
    })
}