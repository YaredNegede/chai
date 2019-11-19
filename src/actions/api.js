import axios from 'axios';

const apiMiddleware = (store) => (next) => (action) => {

  console.log('__________Redux action Log:', action)

  if (!action.meta || action.meta.type !== 'api') {

    return next(action);

  }

  axios.get('/'+action.type.toLowerCase(), action.payload)
    .then(function (data) {

      action.payload = data;

      action.meta.status = true;

    })
    .catch(function (error) {

      action.payload = error;

      action.meta.status = false;

    });

  next(action);

}

export default apiMiddleware;