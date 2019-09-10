
import { success } from "./action"

var data = {
    list: []
}
function reducer(state = data, action) {
    switch (action.type) {
        case success:
            return { ...state, list: action.list }
        default:
            return { ...state }
    }
}
export default reducer