import axios, { AxiosRequestConfig } from "axios";
import { List } from "types";

export const apiClient = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

const findAll = async <T>(path: string, config?: AxiosRequestConfig<any> | undefined) => {
  const response = await apiClient.get<List<T>>(`/${path}`, config);
  return response.data.items;
};

const search = async <T>(path: string, config?: AxiosRequestConfig<any> | undefined) => {
  const response = await apiClient.get<List<T>>(`/${path}`, config);
  return response.data;
};

const retrieve = async <T>(path: string, config?: AxiosRequestConfig<any> | undefined) => {
  const response = await apiClient.get<T>(`/${path}`, config);
  return response.data;
};

const findById = async <T>(path: string, id: any, config?: AxiosRequestConfig<any> | undefined) => {
  const response = await apiClient.get<T>(`/${path}/${id}`, config);
  return response.data;
};
/* const findByTitle = async (title: string) => {
  const response = await apiClient.get<Friend[]>(`/friends?title=${title}`);
  return response.data;
} */

const create = async <T>(path: string, options: Omit<T, "id">) => {
  const response = await apiClient.post<any>(`/${path}`, { ...options });
  return response.data;
};
const update = async <T>(path: string, id: any, options: Partial<T>) => {
  const response = await apiClient.put<any>(`/${path}/${id}`, { ...options });
  return response.data;
};
const deleteById = async (path: string, id: any) => {
  const response = await apiClient.delete<any>(`/${path}/${id}`);
  return response.data;
};
const deleteAll = async (path: string) => {
  const response = await apiClient.delete<any>(`/${path}`);
  return response.data;
};
const Client = {
  findAll,
  search,
  findById,
  retrieve,
  create,
  update,
  deleteById,
  deleteAll,
};
export default Client;
