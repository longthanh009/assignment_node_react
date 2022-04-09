import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../app/hooks"
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateCheckout = (props: PrivateRouterProps) => {
    const user = useAppSelector(state => state.auth.inforUser.user);
    if (!user) {
        return <Navigate to="/signin" />
    }
    return props.children
}


export default PrivateCheckout