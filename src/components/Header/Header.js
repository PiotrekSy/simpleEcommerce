import './styles.scss';
import SearchBar from '../Header/SearchBar'
import Logo from '../Header/Logo'
import Navbar from '../Header/Navbar'

const Header = () => {

    return (
        <div className = "header">
            <Logo />
            <SearchBar />
            <Navbar />
        </div>
    )
}

export default Header;