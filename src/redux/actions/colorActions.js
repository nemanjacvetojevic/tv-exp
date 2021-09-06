import { RESET_FILTERS, SET_COLORS } from './actionTypes'

export function setColors(colors) {
  return { type: SET_COLORS, colors }
}

export function resetColors() {
  return { type: RESET_FILTERS }
}
