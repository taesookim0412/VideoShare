"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postVideo = void 0;
var mongoose = require("mongoose");
var Success_1 = require("../configs/global/Objects/Success");
var video = mongoose.model("videos");
var multer = require('multer');
var s3conf = require('./../configs/s3');
var S3VideoUpload = multer({ storage: s3conf.video }).single('video');
//TODO: Add JWT
//TODO: Add type def for req.file
function postVideo(req, res) {
    S3VideoUpload(req, res, function (err) {
        // @ts-ignore
        if (req.file === undefined) {
            return res.json(Success_1.createFailed());
        }
        var videoPost = {
            author: req.body.author,
            date: Date.now(),
            description: req.body.description,
            likes: 0,
            // @ts-ignore
            src: req.file['location'],
            thumbnail: "",
            title: req.body.title,
            views: 0,
            //TODO: url encoder or index by id
            //TODO: Add thumbnail functionality
        };
        video.create(videoPost, function (err, data) {
            if (err) {
                res.json({ status: "failed" });
            }
            res.json({ status: 'successful', video: data });
        });
    });
}
exports.postVideo = postVideo;
