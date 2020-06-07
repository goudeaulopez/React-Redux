import streams from '../apis/streams'
import history from '../history'
import { 
    SIGN_IN,
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM
 } from './types'

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    }
}
export const signOut = () => {
    return{
        type: SIGN_OUT
    }
}

/*
export const createStream = formValues => async dispatch => {
  const response = await streams.post('/streams', formValues);

  dispatch({type: CREATE_STREAM, payload: response.data});
    
}
*/
export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});
  
    dispatch({type: CREATE_STREAM, payload: response.data});
    // do some programatic navegation to 
    //get the user back to the root route
    history.push('/');

      
  }
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('./streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data})
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`./streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data})
} 

export  const editStream = ( id, formValues) => async dispatch => {
   // const response = await streams.put(`./streams/${id}`, formValues);
   const response = await streams.patch(`./streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data })
    history.push('/');
}
export  const deleteStream = ( id) => async dispatch => {
    await streams.delete(`./streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id })
    history.push('/');
}


/*
Warning
In the next lecture we are going to be creating our history object. As of React Router DOM v4.4.0 you will get a warning in your console:

Warning: Please use `require("history").createBrowserHistory` instead of `require("history/createBrowserHistory")`. Support for the latter will be removed in the next major release.

To fix, our history.js file should instead look like this:

import { createBrowserHistory } from 'history'; 
export default createBrowserHistory();


*/

/*
URL base Selection
  

*/