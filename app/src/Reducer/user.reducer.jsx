import { GET_USER } from '../actions/user.actions'

const initialState = []

export default function userReducer(state = initialState, action) {
  // quel est le type d'action
  switch (action.type) {
    case GET_USER:
      return action.payload

    default:
      return state
  }
}
