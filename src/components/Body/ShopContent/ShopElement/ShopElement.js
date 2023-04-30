import './ShopElement.scss';
import LazyLoad from 'react-lazyload';
import { texts } from './texts.js';


const ShopElement = ({ id, images, category, thumbnail, title, price, discountPercentage, rating, stock }) => {

    return (
        <div key={id} images={images} className="productCard" category={category}>
            <div className="productImage">
                <LazyLoad height={10}>
                    <img src={thumbnail} alt={title} className="thumbnail" />
                </LazyLoad>
            </div>
            <div className="productDescription">
                <div className="pricing">
                    <div className="price">{texts.price} {price}</div>
                    <div className="discount"> {discountPercentage ? discountPercentage + '%' : null}</div>
                </div>
                <div className="name">{texts.product}{title}</div>
                <div className="bottomInfo">
                    <div>{texts.available} {stock}</div>
                    <div className="productRating">{texts.rating}{rating}</div>
                </div>
            </div>
        </div>
    )
}


export default ShopElement;