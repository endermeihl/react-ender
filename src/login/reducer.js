/**
 * Created by ender on 2017/8/30.
 */

import {ADD, NONE}from './actionTypes.js';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD: {
            return ({phone: action.phone, result: action.result})
        }
        case NONE: {
            return ({phone: '', result: {}});
        }
        default: {
            return ({phone: '', result: {}});
        }
    }
}