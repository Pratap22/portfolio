import { DataActions } from '../actions';
const initialState = {
  isLoading: false,
  images: []
};
// reducer
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DataActions.FETCH_IMAGES_REQUEST:
      // setting is loading to true when sending request
      return { ...state, isLoading: true };
    case DataActions.FETCH_IMAGES_SUCCESS:
      //on success setting the initial state of the reducer from payload
      return {
        ...state,
        isLoading: false,
        images: action.payload.portfolio.images
      };
    case DataActions.FETCH_IMAGES_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default dataReducer;

export const getIsLoading = state => state.dataReducer.isLoading;
export const getImages = state => state.dataReducer.images;
