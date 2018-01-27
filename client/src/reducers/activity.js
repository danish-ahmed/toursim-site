export default (state=[], action=[]) => {
    switch (action.type) {
        case 'GET_ACTIVITY':
            return action.properties;
        default: return state
    }
}