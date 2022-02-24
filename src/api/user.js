import instance from "./config";

export const signup = (user) => {
    const url = `/users`;
    return instance.post(url, user);
};
export const signin = (user) => {
    const url = `/users`;
    return instance.post(url, user);
};
export const getAllAcc = () => {
    const url = "/users";
    return instance.get(url);
};
export const removeAcc = (id) => {
    const url = `/users/${id}`;
    return instance.detele(url);
};