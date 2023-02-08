import { FETCH_CHAT, CREATE_CHAT, FETCH_CHAT_BY_ID, FETCH_MESSAGE, CREATE_MESSAGE, FETCH_MESSAGE_BY_ID } from "./actionType"
const url = "https://4b55-180-252-39-206.ap.ngrok.io"

//Return Object
export const fetchChatSuccess = (payload) => {
    return {
        type: FETCH_CHAT,
        payload
    }
}

export const createChatSuccess = (payload) => {
    return {
        type: CREATE_CHAT,
        payload
    }
}

export const fetchChatByIdSuccess = (payload) => {
    return {
        type: FETCH_CHAT_BY_ID,
        payload
    }
}
export const fetchMessageSuccess = (payload) => {
    return {
        type: FETCH_MESSAGE,
        payload
    }
}

export const createMessageSuccess = (payload) => {
    return {
        type: CREATE_MESSAGE,
        payload
    }
}

export const fetchMessageByIdSuccess = (payload) => {
    return {
        type: FETCH_MESSAGE_BY_ID,
        payload
    }
}

//Function

//chat
export function fetchChat(id) {
    console.log(id, '<<<<< cek from action');
    return (dispatch) => {
        return fetch(`${url}/chats?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data, '<<<< from store');
            dispatch(fetchChatSuccess(data))
        })
    }
}

export function createChat(payload) {
    return (dispatch) => {
        return fetch(`${url}/chats`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data, '<<< from store');
            dispatch(createChatSuccess(data))
        })
    }
}

export function fetchChatById(id){
    return(dispatch) => {
        return fetch(`${url}/chats/${id}`, {
            method: "get",
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => 
            res.json()
        )
        .then(data => {
            // console.log(data, '<<<< from action');
            dispatch(fetchChatByIdSuccess(data))
        })
    }
}

//message
export function fetchMessage(id) {
    console.log(id, '<<<<< cek from action message');
    return (dispatch) => {
        return fetch(`${url}/messages?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data, '<<<< from store');
            dispatch(fetchMessageSuccess(data))
        })
    }
}

export function createMessage(payload) {
    console.log(payload, '<<<< from action message');
    return (dispatch) => {
        return fetch(`${url}/messages`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data, '<<< from store');
            dispatch(createMessageSuccess(data))
        })
    }
}

export function fetchMessageById(id){
    return(dispatch) => {
        return fetch(`${url}/messages/${id}`, {
            method: "get",
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => 
            res.json()
        )
        .then(data => {
            // console.log(data, '<<<< from action');
            dispatch(fetchMessageByIdSuccess(data))
        })
    }
}