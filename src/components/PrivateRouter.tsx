import React from 'react'
import { Navigate } from 'react-router-dom';
import {useAppDispatch,useAppSelector} from "../app/hooks"
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const user = useAppSelector(state => state.auth.inforUser.user);
    if (user.role <1) {
        return <Navigate to="/" />
    }
    return props.children
}


export default PrivateRouter