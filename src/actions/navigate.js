import createHistory from 'history/createBrowserHistory';
import { SIGNUP } from './../store/constants/signupConstants'
import { BROWSE } from './../store/constants/homeConstants'

const history = createHistory();

const NavigateRequest = (action) => {

  console.log("navigate.js : ", action)

   const path = "/"+action.payload.next.toLowerCase();
   

  switch (action.payload.next.toLowerCase()) {
    
    case SIGNUP:
    
      console.log("******************signup************************")

      history.push("/employee/create");

      history.go(path);

      break;

    case BROWSE:
      
      console.log("******************browse************************")

        history.push("/employee");
  
        history.go(path);
  
        break;
  
    default:
      break;
  }


}

export default NavigateRequest;