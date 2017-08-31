/**
 * Created by ender on 2017/8/30.
 */

import {ADD, NONE} from './actionTypes.js';

export const add = (responseJson, phone) => ({
    type: ADD,
    phone: phone,
    result: responseJson
});

export const none = () => ({
    type: NONE,
    phone: "",
    result: ""
});

export const checkPhone = (phone) => {
    return (dispatch) => {
        const apiUrl = `/api/register/telephone?telephone=${phone}`;
        console.log(phone);
        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                dispatch(add(responseJson, phone));
            }).catch((error) => {
            });
        }).catch((error) => {
        })
    };
};
