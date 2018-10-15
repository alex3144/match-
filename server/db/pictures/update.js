"use strict";

import pictureModel from "./model";
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

const _update = (picture) => {
    return new Promise(function (resolve, reject) {
        _update_preprocess(picture)
            .then((preData) => {
                _update_mainprocess(preData)
            })
            .then((user) => {
                resolve(user)
            })
            .catch((err) => {
                reject(err);
            });
    })
} // <= _update

// --------------------------------------------------------------------------------

const _update_mainprocess = (preData) => {
    //transformer le model business en model de persistance
    return new Promise(function (resolve, reject) {

        const toUpdate = {};
        if (preData.score) {
            if (!toUpdate["$set"]) {
                toUpdate["$set"] = {};
            }
            toUpdate["$set"]["score"] = preData.score;
        }

        pictureModel.findByIdAndUpdate(
            preData._id,
            toUpdate, {
                new: true
            },
            (err, picture) => {
                if (err) {
                    reject("error_save");
                } else {
                    resolve(picture);
                }
            }
        );
    });
} // <= _update_mainprocess

// --------------------------------------------------------------------------------

const _update_preprocess = (pictureParams) => {
    //controler les regles métier
    return new Promise(function (resolve, reject) {
        //console.log("IN UPDATE USER PARAMS")
        var score = new Promise(function (resolve) {
            if (!pictureParams.score) {
                resolve(null);
            } else resolve(pictureParams.score);
        });

        Promise.all([
                score,
            ])
            .then((pictureUpdate) => {
                const o = {};
                o["score"] = pictureUpdate[0];
                o._id = pictureParams._id;
                console.log("O", o)
                resolve(o);
            })
            .catch(function (err) {
                reject(err);
            });
    });
} // <= _update_preprocess

export default _update