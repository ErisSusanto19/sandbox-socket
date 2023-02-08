import { FETCH_CHAT, CREATE_CHAT, FETCH_CHAT_BY_ID, FETCH_LISTEXCHATS, CREATE_EXCHATS } from "./actionType"
const url = "https://4cba-180-252-39-206.ap.ngrok.io"

//Return Object
export const fetchListExChatsSuccess = (payload) => {
    return {
        type: FETCH_LISTEXCHATS,
        payload
    }
}
export const createExChatsSuccess = (payload) => {
    return {
        type: CREATE_EXCHATS,
        payload
    }
}

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

//Function

//food
export function fetchListExChats() {
    return (dispatch) => {
        return fetch(`${url}/exchats`)
        .then(res => res.json())
        .then(data => {
            console.log(data, '<<<< from store');
            dispatch(fetchListExChatsSuccess(data))
        })
    }
}

export function createExChat(payload) {
    return (dispatch) => {
        return fetch(`${url}/exchats`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data, '<<< cek after create');
            dispatch(createFoodSuccess(data))
        })
    }
}


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

// export function updateChat(payload){
//     return(dispatch) => {
//         return fetch(`${url.api}/chats/${payload.id}`, {
//             method: "put",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(payload)
//         })
//         .then(res => 
//             res.json()
//         )
//         .then(data => {
//             console.log(data);
//             dispatch(fetchChat())
//         })
//     }
// }