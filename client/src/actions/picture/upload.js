// Redux action
export function uploadSuccess({
    data
}) {
    return {
        type: 'UPLOAD_SUCCESS',
        data,
    };
}

export function uploadFail(error) {
    return {
        type: 'UPLOAD_FAIL',
        error,
    };
}


export function loading(loading) {
    return {
        type: 'UPLOAD_STATE',
        loading
    };
}

export function uploadPicture(data) {
    return dispatch => {
        dispatch(loading(true));
        console.log("BEFORE CALL", data)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://192.168.99.100:8080/pictures', true);
        xhr.responseType = 'arraybuffer';
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onload = function (e) {
            // do something to response
            console.log("LOAD END", e);
        };
        xhr.onloadend  = function (response) {
            console.log("LOAD END");
            dispatch(loading(false));
            dispatch(uploadSuccess({data: true}))
        }
        xhr.send(data)
    }
}