import { productType } from "../types/productType";
import instance from "./config";

export const list = () =>{
    const url = "/products";
    return instance.get(url)
};
export const read = (id : any) =>{
    const url = `/product/${id}`;
    return instance.get(url)
};
export const remove = (id :any) =>{
    const url = `/product/${id}`;
    return instance.get(url)
};
export const create = (product : productType) =>{
    const url = "/products";
    return instance.post(url,product)
};
export const update = (product : productType) =>{
    const url = `/product/${product._id}`;
    return instance.put(url,product)
};