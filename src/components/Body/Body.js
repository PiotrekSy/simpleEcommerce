import './Body.scss';
import ShopContent from './ShopContent';
import Sidebar from './Sidebar';
import Ads from './Ads';

const Body = () => {

    return (
        <div className="shopBody">
            <div className="shopContent">
                <Sidebar />
                <ShopContent />
                <Ads />
            </div>
        </div>
    )
};

export default Body;