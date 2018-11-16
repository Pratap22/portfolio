import { database } from '../config/firebase';

export const DataActions = {
  FETCH_IMAGES_REQUEST: 'FETCH_IMAGES_REQUEST',
  FETCH_IMAGES_SUCCESS: 'FETCH_IMAGES_SUCCESS',
  FETCH_IMAGES_ERROR: 'FETCH_IMAGES_ERROR'
};

export function fetchData() {
  //just return function for thunk to handle
  return function(dispatch, getState) {
    //thunk calls this function with dispatch and getState
    //here we can do some async work here
    dispatch({ type: DataActions.FETCH_IMAGES_REQUEST });
    database
      .ref()
      .once('value')
      .then(function(snapshot) {
        dispatch({ type: DataActions.FETCH_IMAGES_SUCCESS, payload: snapshot.val() });
      })
      .catch(function(error) {
        console.log('errror', error);
        dispatch({ type: DataActions.FETCH_IMAGES_ERROR });
      });
  };
}

export const InfoActions = {
  FETCH_INFO_REQUEST: 'FETCH_INFO_REQUEST',
  FETCH_INFO_SUCCESS: 'FETCH_INFO_SUCCESS',
  FETCH_INFO_ERROR: 'FETCH_INFO_ERROR'
};
export function fetchInfo() {
  //just return function for thunk to handle
  return function(dispatch, getState) {
    //thunk calls this function with dispatch and getState
    //here we can do some async work here
    dispatch({ type: InfoActions.FETCH_INFO_REQUEST });
    database
      .ref()
      .once('value')
      .then(function(snapshot) {
        dispatch({ type: InfoActions.FETCH_INFO_SUCCESS, payload: snapshot.val() });
      })
      .catch(function(error) {
        console.log('errror', error);
        dispatch({ type: InfoActions.FETCH_INFO_ERROR });
      });
  };
}
