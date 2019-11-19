import {
    EMAIL_CHANGED,
    FNAME_CHANGED,
    SNAME_CHANGED,
    PWD_CHANGED,
    SIGNUP_ERROR,
    BEFORE_SIGNUP,
    SIGNUP,
    SIGNUP_COMPLETED
} from './../constants/signupConstants'


const valid = (val)=>{

    if(!val.email){
        return true;
    }

    if(!val.password){
        return true;
    } 
    
    if(!val.firstName){
        return true;
    }
    
    if(!val.lastName){
        return true;
    }
    
    return false;
}

const signUpReducer = (store, action) => {

    switch (action.type) {

        case EMAIL_CHANGED:

            return { ...store ,email:action.payload};

        case FNAME_CHANGED:

            return { ...store ,firstName:action.payload};

        case SNAME_CHANGED:

            return { ...store ,lastName:action.payload};

        case PWD_CHANGED:

            return { ...store ,password:action.payload};
            
        case SIGNUP_ERROR:

            return { ...store };

        case SIGNUP_COMPLETED:

            return { ...store };

        case BEFORE_SIGNUP:

            return { ...store ,error:{validation:valid(store),http:false}};

        case SIGNUP:

            return { ...store };

        default:

            return { ...store };
    }

}


export default signUpReducer;