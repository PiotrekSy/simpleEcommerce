import './Body.scss';
import Ads from './Ads';
import Sidebar from './Sidebar';
import ShopContent from './ShopContent';
import { useState } from 'react'

const Body = () => {

    const [currency, setCurrency] = useState('USD');
    const [displayType, setDisplayType] = useState('gallery');
    const [recordsPerPage, setRecordsPerPage] = useState(21);

    return (
        <div className="shopBody">
            <div className="shopContent">
                <Sidebar
                    setCurrency={setCurrency}
                    setDisplayType={setDisplayType}
                    setRecordsPerPage={setRecordsPerPage} />
                <ShopContent
                    currency={currency}
                    displayType={displayType}
                    recordsPerPage={recordsPerPage} />
                <Ads />
            </div>
        </div>
    )
};

export default Body;