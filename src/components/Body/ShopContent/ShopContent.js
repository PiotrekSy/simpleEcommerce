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
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = products.products?.slice(firstIndex, lastIndex);
    const npage = Math.ceil(products.products?.length / recordsPerPage);
    const numbers = npage >= 0 ? [...Array(npage + 1).keys()].slice(1) : null;

    const prevPageHandler = () => currentPage > 1 ? setCurrentPage(currentPage => currentPage - 1) : null;
    const nextPageHandler = () => currentPage < numbers.length - 1 ? setCurrentPage(currentPage => currentPage + 1) : null;

    console.log(numbers)
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

    console.log(npage)
    return (
        <div className="bodyContainer">
            {isLoaded ?
                <div className="content">
                    <div className="itemsContainer" >
                        {records.map((item) =>
                            <div key={item.id} images={item.images} className="productCard" category={item.category}>
                                <div className="productImage">
                                    <LazyLoad height={10}>
                                        <img src={item?.thumbnail} alt={item.title} className="thumbnail" />
                                    </LazyLoad>
                                </div>
                                <div className="productDescription">
                                    <div className="pricing">
                                        <div className="price">{texts.price} {item.price}</div>
                                        <div className="discount"> {item.discountPercentage ? item.discountPercentage + '%' : null}</div>
                                    </div>
                                    <div className="name">{texts.product}{item.title}</div>
                                    {/* <div>{texts.brand} {item.brand}</div> */}
                                    {/* <div>{texts.category} {item.category}</div> */}
                                    {/* <div>{texts.description} {item.description}</div> */}
                                    <div className="bottomInfo">
                                        <div>{texts.available} {item.stock}</div>
                                        <div className="productRating">{texts.rating}{item.rating}</div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    {/* pagination navigation */}
                    <div>
                        
                    </div>
                </div>
                : <div className="loaderContainer">
                    <CircularProgress />
                </div>}
        </div>
    )
};

export default BodyContent;