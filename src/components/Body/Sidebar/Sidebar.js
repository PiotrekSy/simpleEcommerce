import './Sidebar.scss'

const Sidebar = ({ setCurrency, setRecordsPerPage, setDisplayType }) => {

    return (
        <div className="sidebarContainer">
            <div className='utilitiesContainer'>
                <div className="displayTypeInput">
                    <label htmlFor="displayTypeInputSelect">Display type:  </label>
                    <select name="displayTypeInputSelect"
                        onChange={e => setDisplayType(e.target.value)}
                        className="displayTypeInputSelect">
                        <option value="gallery">Gallery</option>
                        <option value="list">List</option>
                    </select>
                </div>
                <div className="displayInput">
                    <label htmlFor="displayInputSelect">Items displayed: </label>
                    <select name="displayInputSelect"
                        onChange={e => setRecordsPerPage(e.target.value)}
                        className="displayInputSelect">
                        <option value="21">21</option>
                        <option value="42">42</option>
                        <option value="84">84</option>
                        <option value="168">168</option>
                    </select>
                </div>
                <div className="currencyInput">
                    <label htmlFor="currencyInputSelect">Currency: </label>
                    <select name="currencyInputSelect"
                        onChange={e => setCurrency(e.target.value)}
                        className="currencyInputSelect">
                        <option value="USD">USD</option>
                        <option value="Euro">Euro</option>
                        <option value="PLN">PLN</option>
                    </select>
                </div>
            </div>
            <div className='filtersContainer'>
                <div>Filters</div>
                <input type="checkbox" name="checkbox1" /><label htmlFor="checkbox1">filter </label>
                <input type="checkbox" name="checkbox2" /><label htmlFor="checkbox2">filter </label>
                <input type="checkbox" name="checkbox3" /><label htmlFor="checkbox3">filter </label>
                <input type="checkbox" name="checkbox4" /><label htmlFor="checkbox4">filter </label>

            </div>
        </div>
    )
}

export default Sidebar;