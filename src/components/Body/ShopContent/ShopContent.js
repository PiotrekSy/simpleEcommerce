import './ShopContent.scss';
import ShopElement from './ShopElement';
import PaginationNav from './PaginationNav';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react'
import { priceConverted } from './functions';

const ShopContent = ({ recordsPerPage, currency, displayType }) => {
    //data:
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    //pagination props + functions: 
    const [currentPage, setCurrentPage] = useState(1);
    const records = products.products?.slice(currentPage * recordsPerPage - recordsPerPage, currentPage * recordsPerPage);
    const nPage = Math.ceil(products.products?.length / recordsPerPage);

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
            {isLoaded ? <>
                <div className='itemsContainer'>
                    {records.map((item, index) =>
                        <ShopElement key={100000 + index}
                            displayType={displayType}
                            title={item.title}
                            price={priceConverted(item?.price, currency)}
                            stock={item.stock}
                            images={item.images}
                            rating={item.rating}
                            category={item.category}
                            thumbnail={item.thumbnail}
                            discountPercentage={item.discountPercentage} />)}
                </div>
                <PaginationNav currentPage={currentPage} setCurrentPage={setCurrentPage} nPage={nPage} /></> :
                <div className="loaderContainer">
                    <CircularProgress />
                </div>}
        </div>
    )
};

export default ShopContent;