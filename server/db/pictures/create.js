"use strict";

import pictureModel from "./model";
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

const _create = (bodyParams) => {
    return new Promise(function (resolve, reject) {
        _create_preprocess(bodyParams)
            .then((preData) => {
                _create_mainprocess(preData).then((file) => {
                    resolve(file);
                });
            })
            .catch(function (err) {
                reject(err);
            });
    });
} // <= _create

const _create_mainprocess = (preData) => {
    return new Promise(function (resolve, reject) {
        var picture = new pictureModel({
            url: preData.url,
            score: 1500,
            dates: {
                created_at: new Date(),
            }
        });
        picture.save((err, pictureData) => {
            if (err) {
                resolve(err);
            } else {
                resolve(pictureData);
            }
        });
    });
} // <= _create_mainprocess

const  _create_preprocess = (pictureParams) => {
    let picture = {};
    return new Promise(function (resolve, reject) {
        let url = new Promise(function (resolve) {
            if (pictureParams.url) {
                resolve(pictureParams.url);
            } else {
                resolve(null);
            }
        });
        // return new Promise(function (resolve, reject) {
        Promise.all([url])
            .then(function (filePromise) {
                picture["url"] = filePromise[0];
                resolve(picture);
            })
            .catch(function (err) {
                reject(err);
            });
    });
} // <= _create_preprocess

export default _create