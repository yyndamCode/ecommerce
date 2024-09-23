import axiosInstance from "@/app/_lib/axiosInstance";

export const getProducts = async () => {
    try {
        const response = await axiosInstance.get("/product");
        return response.data
    } catch (err) {
        console.error("Error fetching categories:", err);
        return [];
    }
}