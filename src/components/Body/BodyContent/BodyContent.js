import './styles.scss';
import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { texts } from './texts.js';

const BodyContent = () => {

    const [products, setProducts] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
                setIsLoaded(true);
            });
    }, []);

    console.log(products)
    return (
        <div className="bodyContainer">
            {isLoaded ? <div>
                {products.products.map((item) =>
                    <div key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        {isLoaded ? item.images.map((item, index) =>
                            <img src={item.images[index]}
                                alt={item.images[index]} />)
                            : null}
                        <div>{texts.title}{item.title}</div>
                        <div>Brand: {item.brand}</div>
                        <div>Category: {item.category}</div>
                        <div>Description:  {item.description}</div>
                        <div>Price: {item.price}</div>
                        <div>Discount % : {item.price}</div>
                        <div>Available: {item.stock}</div>
                        <div>Rating: {item.rating}</div>
                    </div>)}
            </div>
                : <CircularProgress />}
        </div>
    )
};

export default BodyContent;