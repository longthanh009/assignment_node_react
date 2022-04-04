
import instance from "./config";

export const list = () => {
    const url = "/files";
    return instance.get(url)
};
export const read = (id: any) => {
    const url = `/file/${id}`;
    return instance.get(url)
};
export const remove = (id: any) => {
    const url = `/file/${id}`;
    return instance.delete(url)
};
export const create = (file: any) => {
    const url = "/files";
    return instance.post(url, file)
};
export const update = (file: any) => {
    const url = `/file/${file._id}`;
    return instance.put(url, file)
};