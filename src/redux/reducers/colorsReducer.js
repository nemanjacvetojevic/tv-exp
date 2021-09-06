import { SET_COLORS, RESET_FILTERS } from '../actions/actionTypes'
import initialState from './initialState'

export default function colorsReducer(state = initialState.colors, action) {
  switch (action.type) {
    case SET_COLORS:
      return action.colors
    case RESET_FILTERS:
      return initialState.colors
    default:
      return state
  }
}
