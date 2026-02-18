export const fetchData = async (page) => {
    const skip = (page-1) * 10;
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
    if(!response.ok) {
        throw new Error("Failed in fetching!");
    }
    const result = response.json();
    return result;
}