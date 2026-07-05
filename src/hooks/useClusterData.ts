import { useQuery} from "@tanstack/react-query";

async function fetchProducts(){
    const response = await fetch("https://dummyjson.com/products");

    if(!response.ok){
        throw new Error("Failed to fetch products");
    }

    return response.json();
}

export function useClusterData(){
    return useQuery({
        queryKey: ["cluster-data"],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5,
    });
}