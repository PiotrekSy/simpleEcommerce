import './ShopElement.scss';
import LazyLoad from 'react-lazyload';
import { texts } from './texts.js';

const ShopElement = ({
    stock,
    title, price,
    images, rating,
    category, thumbnail,
    discountPercentage,
    displayType
}) => {

    return (
        <div images={images} className={displayType === 'gallery' ? "productCard" : "productList"} category={category}>
            <div className={displayType === 'gallery' ? "productImage" : "productImageList"}>
                <LazyLoad height={10}>
                    <img src={thumbnail} alt={title} className={displayType === 'gallery' ? "thumbnail" : "thumbnailList"} />
                </LazyLoad>
            </div>
            <div className={displayType === 'gallery' ? "productDescription" : "productDescriptionList"}>
                <div className={displayType === 'gallery' ? "pricing" : "pricingList"}>
                    <div className={displayType === 'gallery' ? "price" : "priceList"}>{price}</div>
                    <div className={displayType === 'gallery' ? "discount" : "discountList"}> {discountPercentage ? '-' + discountPercentage + '%' : null}</div>
                </div>
                <div className={displayType === 'gallery' ? "name" : "nameList"}>{title}</div>
                <div className={displayType === 'gallery' ? "bottomInfo" : "bottomInfoList"}>
                    <div>{stock}{texts.available} </div>
                    <div className={displayType === 'gallery' ? "productRating" : "productRatingList"}>{texts.rating}{rating}</div>
                </div>
            </div>
        </div>
    )
}


export default ShopElement;