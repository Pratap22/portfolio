import { InfoActions } from '../actions';
const initialState = {
  isLoading: false,
  information: ''
};
const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case InfoActions.FETCH_INFO_REQUEST:
      // setting is loading to true when sending request
      return { ...state, isLoading: true };
    case InfoActions.FETCH_INFO_SUCCESS:
      //on success setting the initial state of the reducer from payload
      return {
        ...state,
        isLoading: false,
        information: action.payload.portfolio.information
      };
    case InfoActions.FETCH_INFO_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default infoReducer;

export const getInfo = state => state.infoReducer.information;
export const getIsLoading = state => state.infoReducer.isLoading;
