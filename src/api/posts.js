import instance from "./config";

export const getAll = () => {
    const url = "/posts";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.detele(url);
};
export const add = (post) => {
    const url = `/posts`;
    return instance.post(url, post);
};
export const edit = (post) => {
    const url = `/posts/${post.id}`;
    return instance.put(url, post);
};