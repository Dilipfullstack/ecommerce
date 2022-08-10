import { useEffect } from "react";
import { useState } from "react";
import ProductDisplay from "./productDisplay";
import ProductDisplayNext10 from "./productNext10";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const Product = () => {

    const [product, setProduct] = useState([]);
    const [productNext10, setProductNext10] = useState([]);
    const [fiterCriteria, setFilterCriteria] = useState("Select Category");

    function filterByCategory(obj) {
        if(fiterCriteria === "Select Category") {
            return true;
        } else if(obj.category === fiterCriteria) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> {
                const dataInArrayForm = Array.from(data)
                // const first10 = dataInArrayForm.slice(0, 10);
                let first10 = [];
                if(fiterCriteria !== "Select Category") {
                    first10 = dataInArrayForm.filter((item) => filterByCategory(item));
                }else {
                    first10 = dataInArrayForm.slice(0, dataInArrayForm.length / 2);
                }
                const next10 = dataInArrayForm.slice(10, 20);
                setProductNext10(next10)
                setProduct(first10)
                console.log(first10)})
    }, [fiterCriteria])

    return (
        <>
        <select name='filter' id='filter' onChange={(e) => setFilterCriteria(e.target.value)}>
                <option value="Select Category">Select Category</option>
                <option value="women's clothing">women's clothing</option>
                <option value="electronics">electronics</option>
                <option value="men's clothing">men's clothing</option>
        </select>
            {product.map((item) => {
                return (
                    <>
                        <ProductDisplay image={item.image} description={item.description} alt="fakeAPI" />
                    </>
                )
            })}
            <Link to="/next">Next Page</Link>
        </>
    )
};

export default Product;