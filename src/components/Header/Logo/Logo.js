import './styles.scss';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Logo = () => {

    return (
        <div>
            <div className='logo'>
                <StorefrontIcon fontSize="large" className='logoIcon' />
                <div className='logoName'>FakeShop</div>
            </div>
        </div>
    )
}

export default Logo;