import { useState, useEffect } from "react";
import axios from "axios";

interface Shop {
    id: number,
    commercialName: string,
    streetNumber: number,
    streetName: string,
    type: string
}

export const ShopList = () => {
    const [shops, setShops] = useState<Shop[]>([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/shops")
            .then((response) => {
                console.log(response.data['hydra:member']);
                setShops(response.data['hydra:member']);
            })
            .catch((error) => {
                console.error("Erreur lors de la requête GET :", error);
            });
    }, []);

    return (
        <>
            {shops.map(shop => (
                <div key={shop.id}>
                    <h1>{shop.id}</h1>
                    <h2>{shop.commercialName}</h2>
                </div>
            ))}
        </>
    );
};
