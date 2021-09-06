import { SET_MIN_VAL, SET_MAX_VAL, RESET_FILTERS } from '../actions/actionTypes'
import initialState from './initialState'

export default function priceReducer(state = initialState.priceRange, action) {
  switch (action.type) {
    case SET_MIN_VAL:
      return { ...state, minVal: action.value }
    case SET_MAX_VAL:
      return { ...state, maxVal: action.value }
    case RESET_FILTERS:
      return initialState.priceRange
    default:
      return state
  }
}
