/**
 * Created by Bien on 2017-09-11.
 */
import {
    FETCH_USERS
} from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            return [ ...state, ...action.payload.data ];
    }

    return state;
}