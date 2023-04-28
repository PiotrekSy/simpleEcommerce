
import './styles.scss';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {

    return (
        <div className='nav'>
            <div className='navItem'>
                <span className='navItemLineOne'>Hello Guest!</span>
                <span className='navItemLineTwo'>Sign In</span>
            </div>
            <div className='navItem'>
                <span className='navItemLineOne'>Your</span>
                <span className='navItemLineTwo'>Basket:</span>
            </div>
            <div className='navItemBasket'>
                <ShoppingBasketIcon fontSize="large" className='navItemLineOne' />
                <span className='navItemLineTwo'>0</span>
            </div>
        </div>
    )
}

export default Header;