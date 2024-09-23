import axiosInstance from "@/app/_lib/axiosInstance";

export const getCategories = async () => {
    try {
            const response = await axiosInstance.get("/category");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};