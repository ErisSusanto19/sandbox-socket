import { CREATE_CHAT, CREATE_EXCHATS, FETCH_CHAT, FETCH_CHAT_BY_ID, FETCH_LISTEXCHATS } from "./actionType";

const initialState = {
    exchats: [],
    chats: [],
    chat: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LISTEXCHATS:
            return {
                ...state,
                exchats: action.payload
            }
        case CREATE_EXCHATS:
            return {
                ...state,
                exchats: state.exchats.concat(action.payload)
            }
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
        default:
            return state
    }
}

export default rootReducer