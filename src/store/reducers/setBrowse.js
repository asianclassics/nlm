import { constants } from '../_constants'
import { initialState } from '../initialState'

let { actions } = constants

export default (state = initialState.browse, action) => {
    switch (action.type) {
        case actions.SET_BROWSE:
            return action.payload
        default:
            return state
    }
}
