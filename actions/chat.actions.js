import chatService from '../services/chat.service'

export default {
    join,
    sendMessage
}

function join(username, room) {
    return dispatch => {
        dispatch({ type: 'JOIN_REQUEST', username, room });
        setTimeout(() =>
            chatService.join(username, room)
                .then(messages => dispatch({ type: 'JOIN_SUCCES', messages }))
                .catch(error => dispatch({ type: 'JOIN_FAILURE', error }))
            , 2000);
    }
}

function sendMessage(message) {
    return dispatch({ type: 'SEND_MESSAGE_REQUEST', message });
    chatService.sendMessage(message)
        .then(message => dispatch('SEND_MESSAGE_REQUEST', message))
}