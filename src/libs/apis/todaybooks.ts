import axiosInstance from "./axiosInstance";

export const todayBooks = async () => {
    const res = await axiosInstance.get('/v3/search/book', {
        params: {query: '사랑'}
    })

    return res.data.documents
}