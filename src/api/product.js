import instance from "./config";

export const getAllSP = () => {
    const url = "/product";
    return instance.get(url);
};
export const getSP = (id) => {
    const url = `/product/${id}`;
    return instance.get(url);
};
export const removeSP = (id) => {
    const url = `/product/${id}`;
    return instance.detele(url);
};
export const addSP = (product) => {
    const url = `/product`;
    return instance.post(url, product);
};
export const editSP = (product) => {
    const url = `/product/${product.id}`;
    return instance.put(url, product);
};