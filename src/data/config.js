export const endopoint = "https://dummyjson.com";
export const baseUrl = ({ path, limit }) => `${endopoint}${path}?limit=${limit}`;