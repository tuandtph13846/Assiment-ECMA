import instance from "./config";

export const getAllCate = () => {
    const url = "/categories";
    return instance.get(url);
};
export const getCate = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
};
export const removeCate = (id) => {
    const url = `/categories/${id}`;
    return instance.detele(url);
};
export const addCate = (post) => {
    const url = `/categories`;
    return instance.post(url, post);
};
export const editCate = (post) => {
    const url = `/categories/${post.id}`;
    return instance.put(url, post);
};