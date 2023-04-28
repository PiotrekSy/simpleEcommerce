import './styles.scss';

import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    return (

        <div className={'search'}>
            <input placeholder="Search..."></input>
            <SearchIcon lassName={'searchIcon'} />
        </div>
    )
}

export default Header;