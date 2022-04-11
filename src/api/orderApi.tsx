import instance from "./config";

export const createOrder = (order : any) =>{
    const url ="/orders";
    return instance.post(url,order)
}
export const listOrder = () =>{
    const url ="/orders";
    return instance.get(url)
}
export const updateOrder = (id:any,status : any) =>{
    const url = `/order/${id}`;
    return instance.put(url,status)
};
export const read = (id:any) =>{
    const url = `/orders?username=${id}`;
    return instance.get(url)
};