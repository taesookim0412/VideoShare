"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
module.exports = function () {
    var VideosSchema = new mongoose.Schema({
        author: { type: String },
        description: { type: String },
        likes: { type: Number },
        src: { type: String },
        thumbnail: { type: String },
        title: { type: String },
        url: { type: String },
        views: { type: Number }
    });
    var videos = mongoose.model("videos", VideosSchema);
};
