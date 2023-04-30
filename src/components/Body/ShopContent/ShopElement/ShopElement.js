import './ShopElement.scss';
import LazyLoad from 'react-lazyload';
import { texts } from './texts.js';

const ShopElement = ({
    stock,
    title, price,
    images, rating,
    category, thumbnail,
    discountPercentage }) => {

    return (
        <div images={images} className="productCard" category={category}>
            <div className="productImage">
                <LazyLoad height={10}>
                    <img src={thumbnail} alt={title} className="thumbnail" />
                </LazyLoad>
            </div>
            <div className="productDescription">
                <div className="pricing">
                    <div className="price">{price}</div>
                    <div className="discount"> {discountPercentage ? '-' + discountPercentage + '%' : null}</div>
                </div>
                <div className="name">{title}</div>
                <div className="bottomInfo">
                    <div>{stock}{texts.available} </div>
                    <div className="productRating">{texts.rating}{rating}</div>
                </div>
            </div>
        </div>
    )
}


export default ShopElement;