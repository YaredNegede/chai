import {
    BEFORE_LOGIN, LOGIN, AFTER_LOGIN, LOGIN_COMPLETED, PWD_CHANGED, EMAIL_CHANGED
} from '../constants/loginConstant'


const forgetReducer = (store, action) => {

    switch (action.type) {
        case PWD_CHANGED:

            return { ...store, password:action.payload }

        case EMAIL_CHANGED:

            return { ...store ,email:action.payload}

        case BEFORE_LOGIN:

            return { ...store, ...action.payload }

        case LOGIN:

            return { ...store }

        case LOGIN_COMPLETED:

            return { ...store}

        case AFTER_LOGIN:

            return { ...store }

        default:

            return { ...store }

    }

}

export default forgetReducer;
