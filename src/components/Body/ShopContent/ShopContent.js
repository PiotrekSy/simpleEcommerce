import { useState, useEffect } from 'react'
import ShopElement from './ShopElement';
import './ShopContent.scss';
import CircularProgress from '@mui/material/CircularProgress';
import {
    firstPageHandler,
    prevPageHandler,
    nextPageHandler,
    lastPageHandler,
} from './functions.js'

const ShopContent = () => {
    //data:
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    //pagination: 
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(3);

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = products.products?.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(products.products?.length / recordsPerPage);
    const numbers = nPage >= 0 ? [...Array(nPage + 1).keys()].slice(1) : null;

    useEffect(() => {
        try {
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((json) => {
                    setProducts(json);
                    setIsLoaded(true);
                });
        } catch (err) {
            console.error('CURRENT f******* ERROR: ' + err)
        }
    }, []);

    return (
        <div className="shopContainer">
            {isLoaded ? <div className="content">
                <div className="itemsContainer">
                    {records.map((item, index) =>
                        <ShopElement key={index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            stock={item.stock}
                            images={item.images}
                            rating={item.rating}
                            category={item.category}
                            thumbnail={item.thumbnail}
                            discountPercentage={item.discountPercentage} />)}
                </div>
                {/* pagination navigation */}
                <div className="navigationContainer">
                    <button type="button" onClick={firstPageHandler(currentPage, setCurrentPage)} className="arrowButton">{'<<'}</button>
                    <button type="button" onClick={prevPageHandler(currentPage, setCurrentPage)} className="arrowButton">{'<'}</button>
                    <div className="pagesDisplay">{currentPage}{' / '}{nPage}</div>
                    <button type="button" onClick={nextPageHandler(currentPage, setCurrentPage, numbers)} className="arrowButton">{'>'}</button>
                    <button type="button" onClick={lastPageHandler(currentPage, setCurrentPage, numbers)} className="arrowButton">{'>>'}</button>
                </div>
            </div>
                : <div className="loaderContainer">
                    <CircularProgress />
                </div>}
        </div>
    )
};

export default ShopContent;