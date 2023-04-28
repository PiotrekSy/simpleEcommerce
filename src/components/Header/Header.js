import './styles.scss';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    return (
        <div>
            <div className={'logo'}>
                <StorefrontIcon fontSize="large" className='logoIcon' />
                <div className={"logoName"}>Shop</div>
            </div>
            <div className={'search'}>
                <input placeholder="Search..."></input>
                <SearchIcon lassName={'searchIcon'} />
            </div>
            <div className={'nav'}>
                <div className={'navItem'}>
                    <span className={'navItemLineOne'}>Hello Guest</span>
                    <span className={'navItemLineTwo'}>Sign In</span>
                </div>
                <div className={'item'}>
                    <span className={'navItemLineOne'}>Your</span>
                    <span className={'navItemLineTwo'}>Shop</span>
                </div>
                <div className={'item'}>
                    <ShoppingBasketIcon fontSize="large" />
                    <span className={'navItemLineTwo'}>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;