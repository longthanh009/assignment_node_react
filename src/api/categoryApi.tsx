import { categoryType } from "../types/categoryType";
import instance from "./config";

export const list = () =>{
    const url = "/categorys";
    return instance.get(url)
};
export const read = (id : any) =>{
    const url = `/category/${id}`;
    return instance.get(url)
};
export const remove = (id :any) =>{
    const url = `/category/${id}`;
    return instance.delete(url)
};
export const create = (category : categoryType) =>{
    const url = "/categorys";
    return instance.post(url,category)
};
export const update = (category : categoryType) =>{
    const url = `/category/${category._id}`;
    return instance.put(url,category)
};