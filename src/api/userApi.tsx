import instance from "./config"

export const getUer = (id : any) => {
    const url = `user/${id}`
    return instance.get(url)
}