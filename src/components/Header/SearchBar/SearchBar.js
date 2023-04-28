import './styles.scss';

import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    return (

        <div className='searchComponent'>
            <input placeholder="Search FakeShop..." className="searchInput" />
            <div className='searchIcon' >
                <SearchIcon />
            </div>
        </div>
    )
}

export default Header;