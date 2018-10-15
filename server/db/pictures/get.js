"use strict";

import pictureModel from "./model";
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

const _getAll = () => {
    //transformer le model business en model de persistance
    return new Promise(function (resolve, reject) {
        pictureModel.find({},
            (err, pictures) => {
                if (err) {
                    resolve("error_save");
                } else {
                    resolve(pictures);
                }
            }
        );
    });
} // <= _get

export default _getAll