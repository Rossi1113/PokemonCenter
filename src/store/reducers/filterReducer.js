import { UPDATE_FILTER } from '../actions/types';


const initialState = {
  item: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      //console.log(state);
      return {
        ...state,
        items: action.payload   // payload is all the filters : xs, xl
      };
    default:
      return state;
  }
}
