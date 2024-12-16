import axiosInstance from "./axiosInstance";

export const testApi = async () => {
  const res = await axiosInstance.get(`/v3/search/book`, {
    params: { query: "미움" },
  });

  return res?.data?.documents;
};
