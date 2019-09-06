import CREATE_HABIT from '../actions/habbitsActions';

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default function habbitsReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_HABIT:
      return { ...state, list: [...state, action.payload] };
    default:
      return state;
  }
}
