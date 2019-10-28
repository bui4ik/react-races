import {axiosInstance} from "../axiosInstance";

export const getAllUsers = async () => {
    const { data } = await axiosInstance.get('./users');
    return data
};

export const getUser = async (id: string) => {
    const { data } = await axiosInstance.get(`./users/${id}`);
    return data[0];
};

export const updateUser = async ({id, name, surname, username, email, description, photo}: any) => {
    const { data } = await axiosInstance.put(`./users/${id}`,{
        name,
        surname,
        username,
        email,
        description,
        photo
    });
    return data;
};

export const addNewUser = async ({password, name, surname, username, email, description, photo}: any) => {
    const { data } = await axiosInstance.post('./users', {
        name,
        surname,
        username,
        password,
        email,
        description,
        photo
    });
    return data;
};

export const deleteUser = async (id: string) => {
    const { data } = await axiosInstance.delete(`./users/${id}`);
    return data._id;
};
