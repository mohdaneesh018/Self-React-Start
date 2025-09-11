import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UseParams = () => {
    const [tshirt, setTshirt] = useState([
        {
            id: 1,
            name: "t-shirt1",
            price: 100,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhgsZsWcDbj5p1IIP5JDF28e-dS92SQ7gyccQ2By_dgh0E7l2fFJhhDCnJJM9NvnydmEZZdSlIcQX8kWc7pxoigN9WWgqse4BDt_0oe5FnJ9f5E5TWzvLW"
        },
        {
            id: 2,
            name: "t-shirt2",
            price: 200,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhgsZsWcDbj5p1IIP5JDF28e-dS92SQ7gyccQ2By_dgh0E7l2fFJhhDCnJJM9NvnydmEZZdSlIcQX8kWc7pxoigN9WWgqse4BDt_0oe5FnJ9f5E5TWzvLW"
        },
        {
            id: 3,
            name: "t-shirt3",
            price: 300,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhgsZsWcDbj5p1IIP5JDF28e-dS92SQ7gyccQ2By_dgh0E7l2fFJhhDCnJJM9NvnydmEZZdSlIcQX8kWc7pxoigN9WWgqse4BDt_0oe5FnJ9f5E5TWzvLW"
        },
        {
            id: 4,
            name: "t-shirt4",
            price: 400,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhgsZsWcDbj5p1IIP5JDF28e-dS92SQ7gyccQ2By_dgh0E7l2fFJhhDCnJJM9NvnydmEZZdSlIcQX8kWc7pxoigN9WWgqse4BDt_0oe5FnJ9f5E5TWzvLW"
        }
    ]);
    console.log(tshirt, "tshirt");
    const router = useNavigate();

    return (
        <div style={{ display: "flex", gap: "50px" }}>
            {tshirt.map((product) =>
                <div
                    key={product.id}
                    style={{ cursor: "pointer", marginTop: "20px" }}
                    onClick={() => router(`/product/${product.id}`)}
                >
                    <img
                        style={{ width: "200px", height: "300px", border: "2px solid red" }}
                        src={product.image} />
                    <h2>Name: {product.name}</h2>
                    <h2>Price: {product.price}/-</h2>
                </div>
            )}
        </div>
    )
}

export default UseParams
