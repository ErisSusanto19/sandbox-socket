import { CREATE_CHAT, CREATE_MESSAGE, FETCH_CHAT, FETCH_MESSAGE, FETCH_CHAT_BY_ID, FETCH_MESSAGE_BY_ID } from "./actionType";

const initialState = {
    chats: [],
    chat: {},
    messages: [],
    message: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CHAT:
            return {
                ...state,
                chats: action.payload
            }
        case CREATE_CHAT:
            return {
                ...state,
                chats: state.chats.concat(action.payload)
            }
        case FETCH_CHAT_BY_ID:
            return {
                ...state,
                chat: action.payload
            }
        case FETCH_MESSAGE:
            return {
                ...state,
                messages: action.payload
            }
        case CREATE_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.payload)
            }
        case FETCH_MESSAGE_BY_ID:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

export default rootReducer