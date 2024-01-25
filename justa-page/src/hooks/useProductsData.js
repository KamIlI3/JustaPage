import { useState, useEffect } from "react";

function useProductsData(){
    const [products, setNames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then((response) => response.json())
        .then((data) => {
            setNames(data.slice(0, 3));
        })
        .catch((error) =>
        console.error("Error fetching products data:", error));
    }, []);
    
    return {products};
}

export default useProductsData;