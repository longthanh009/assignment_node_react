import instance from "./config";

export const createOrderDetail = (order :any) =>{
    const url ="/orderdetail";
    return instance.post(url,order)
};
export const orderDetailList = (order_id:any) =>{
    const url = `orderdetail/${order_id}`;
    return instance.get(url);
}