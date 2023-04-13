import {api} from "../../config/requester"
import {Cookie} from "../../helpers/cookie";
import {postFill} from "../reducers/usersReducers";
import {getUser} from "../reducers/usersReducers";

export const authThunk = () => {
    return async (dispatch) => {
        const data = await api.get('posts')
        dispatch(postFill(data.response.data))
    }
}
export const authThunkToken = (body) => {
    return async (dispatch) => {
        const data = await api.post('/login', {username: body.username, password: body.password})
        console.log(data)
        Cookie.setCookie('token', data.response.new_token, 1)
        Cookie.setCookie('user', JSON.stringify(data.response.data))

        // dispatch(getUser(data.response.user))
    }
}