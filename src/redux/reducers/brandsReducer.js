import { RESET_FILTERS, SET_BRANDS } from '../actions/actionTypes'
import initialState from './initialState'
export default function brandReducer(state = initialState.brands, action) {
  switch (action.type) {
    case SET_BRANDS:
      return action.brands
    case RESET_FILTERS:
      return initialState.brands
    default:
      return state
  }
}
