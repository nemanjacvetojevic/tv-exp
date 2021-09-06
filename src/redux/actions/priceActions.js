import { SET_MIN_VAL, SET_MAX_VAL, RESET_FILTERS } from './actionTypes'

export function setMinVal(value) {
  return { type: SET_MIN_VAL, value }
}

export function setMaxVal(value) {
  return { type: SET_MAX_VAL, value }
}

export function resetPriceRange() {
  return { type: RESET_FILTERS }
}
