import {axiosInstance} from "../axiosInstance";

export const getAllUsers = async () => {
    const { data } = await axiosInstance.get('./data/users.json');
    return data
};

export const getUser = async () => {
    const { data } = await axiosInstance.get('./data/users.json');
    return data.find((user: { id: string; }) => user.id === '2');
};
