import { Map } from 'immutable';

import { TOGGLE_IMAGESLIDERS } from '../actionTypes';

const initialState = Map({
  isActive: true,
});

const imageSliders = (state = initialState, action) => {
  switch (action.type) {         
    case TOGGLE_IMAGESLIDERS:
      return state.set('isActive', !state.get('isActive'));
    default:
      return state;
  }
}

export default imageSliders;