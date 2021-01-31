
const initState = {
    username = '',
    room ='',
    messages: [],
    error = null,
    loading: false,
};


export default function (state = initState, action) {
    switch (action.type) {
        case 'JOIN_REQUEST':
            return {
                ...state,
                usrname: action.username,
                room: action.room,
                loading: true,
            };

        case 'JOIN_SUCCES':
            return {
                ...state,
                messages: action.messages,
                loading: false,

            };


        case 'JOIN_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,

            };

        default:
            return state;

    }
}