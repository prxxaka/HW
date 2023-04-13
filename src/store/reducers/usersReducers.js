const initialState = {
    users: ['John'],
    posts: [],
    user: {}
}
export const actionUsers = {
    push: 'push',
    delete: 'delete',
    getPosts: 'getPosts',
    getUser: 'getUser'
}


export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionUsers.push: {
            return {...state, users: [...state.users, action.payload]}
        }
        case actionUsers.delete: {
            return {...state, users: [...state.users.filter((item) => item !== action.payload)]}
        }
        case actionUsers.getPosts: {
            return {...state, posts:action.payload}
        }
        case actionUsers.getUser:{
            return {...state, user: action.payload}
        }
        default:
            return state
    }
}

export const usersPush = (payload) => ({type: actionUsers.push, payload})
export const usersDelete = (payload) => ({type: actionUsers.delete, payload})
export const postFill = (payload) => ({type: actionUsers.getPosts, payload})
export const getUser = (payload) => ({type: actionUsers.getUser, payload})