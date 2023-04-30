import { texts } from './texts.js';
import { useState, useEffect } from 'react'
import './ShopContent.scss';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@mui/material/CircularProgress';

const BodyContent = () => {
    //data:
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    //pagination: 


    useEffect(() => {
        try {
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((json) => {
                    setProducts(json);
                    setIsLoaded(true);
                });
        } catch (err) {
            console.error(err)
        }
    }, []);

    return (
        <div className="bodyContainer">
            {isLoaded ?
                <div className="content">
                    <div className="itemsContainer" >
                        {products.products.map((item) =>
                            <div key={item.id} images={item.images} className="productCard" category={item.category}>
                                <div className="productImage">
                                    <LazyLoad height={10}>
                                        <img src={item?.thumbnail} alt={item.title} className="thumbnail" />
                                    </LazyLoad>
                                </div>
                                <div className="productDescription">
                                    <div>{texts.product}{item.title}</div>
                                    <div>{texts.brand} {item.brand}</div>
                                    {/* <div>{texts.category} {item.category}</div> */}
                                    {/* <div>{texts.description} {item.description}</div> */}
                                    <div>{texts.price} {item.price}</div>
                                    <div>{texts.discount} {item.price}</div>
                                    <div className="bottomInfo">
                                        <div>{texts.available} {item.stock}</div>
                                        <div className="productRating">{texts.rating}{item.rating}</div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
                : <div className="loaderContainer">
                    <CircularProgress />
                </div>}
        </div>
    )
};

export default BodyContent;