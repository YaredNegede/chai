
import {
    BROWSE_ERROR,
    BEFORE_BROWSE,
    BROWSE,
    AFTER_BROWSE,
    BROWSE_COMPLETED
} from './../constants/homeConstants'

const dashBoardReducer = (store, action) => {

    switch (action.type) {
        case BROWSE_ERROR:

            return { ...store }
        case BEFORE_BROWSE:

            return { ...store }
        case BROWSE:

            return { ...store }
        case AFTER_BROWSE:

            return { ...store }
        case BROWSE_COMPLETED:

            return { ...store }

        default:
            return { ...store }

    }
}

export default dashBoardReducer;