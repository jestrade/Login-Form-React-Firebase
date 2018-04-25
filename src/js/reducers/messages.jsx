import initialState from './initialState.jsx';

export function messages(state=initialState.messages, action) {
    switch (action.type) {
        case 'MESSAGES_LOAD_SUCCESS':
            return action.messages;
        case 'MESSAGES_CREATE_SUCCESS':
            return state;
        case 'MESSAGES_DELETE_SUCCESS':
            const newState = Object.assign([], state);
            return newState.filter((messageId)=>messageId.id!=action.messageId.id);
        default:
            return state;
    }
}