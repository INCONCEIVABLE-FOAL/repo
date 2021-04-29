import React, { useEffect, useState } from "react";
import axios from "axios";

interface IProduct {
    id: number;
    imageUrl: string;
    name: string;
    brand: string;
    price: number;
    rating: number;
}
const emptyProducts: IProduct[] = [];

function Products() {
    const [products, setProducts]: [
        IProduct[],
        (products: IProduct[]) => void
    ] = useState(emptyProducts);

    useEffect(() => {
        axios
        .get<IProduct[]>("https://localhost:5001/catalog", {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => setProducts(response.data));
    }, []);

    
}

export default Products;