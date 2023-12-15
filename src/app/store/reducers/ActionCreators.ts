import {AppDispatch} from "../store.ts";
import axios from 'axios'
import {IUser} from "../models/IUser.ts";
import {userSlice} from './UserSlice.ts'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))


    } catch (e: unknown) {
        const errorMessage = (e as Error)?.message || 'An error occurred';
        dispatch(userSlice.actions.usersFetchingError(errorMessage));
    }
}
