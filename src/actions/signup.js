import {
  EMAIL_CHANGED,
  FNAME_CHANGED,
  SNAME_CHANGED,
  PWD_CHANGED,
  SIGNUP_ERROR,
  BEFORE_SIGNUP,
  SIGNUP,
  SIGNUP_COMPLETED

} from '../store/constants/signupConstants'

import {
  LOGIN
} from '../store/constants/loginConstant'

const afterSignupSuccess = (data) => {
  return {
    type: SIGNUP,
    payload: data
  }
};

const afterSignupFailure = () => {

  return {
    type: SIGNUP_ERROR
  }
};


const afterSignupCompleted = () => {
  return {
    type: SIGNUP_COMPLETED,
    payload: { next: LOGIN }
  }
};

const beforeSignupSuccess = () => {
  return {
    type: BEFORE_SIGNUP
  }
};

const fnameChanged = (data) => {
  return {
    type: FNAME_CHANGED,
    payload: data
  }
};
const snameChanged = (data) => {
  return {
    type: SNAME_CHANGED,
    payload: data
  }
};

const pwdChanged = (data) => {
  return {
    type: PWD_CHANGED,
    payload: data
  }
};

const emailChanged = (data) => {
  return {
    type: EMAIL_CHANGED,
    payload: data
  }
};

const signup = () => {
  return {
    type: SIGNUP,
    meta: { type: 'api', status: false }
  }
};


export {
  fnameChanged,
  snameChanged,
  pwdChanged,
  emailChanged,
  afterSignupFailure,
  afterSignupCompleted,
  beforeSignupSuccess,
  afterSignupSuccess,
  signup
};