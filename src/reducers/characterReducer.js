const initState = {
    name: "Defangga Aby Vonega",
    pekerjaan: "Pengagguran",
    umur: 21
}

const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'CHANGE_PEKERJAAN':
            return {
                ...state,
                pekerjaan: action.payload
            }
        case 'CHANGE_UMUR':
            return {
                ...state,
                umur: action.payload
            }
        default:
            return state
    }
}

export default characterReducer;