import { userType } from "../types/userType";
import instance from "./config";

export const signin = (user: userType) => {
    const url = "/signin";
    return instance.post(url, user)
};
export const signup = (user: userType) => {
    const url = "/signup";
    return instance.post(url, user)
};