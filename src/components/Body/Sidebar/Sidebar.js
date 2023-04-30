import './Sidebar.scss'

const Sidebar = () => {

    return (
        <div className="sidebarContainer">
            <div className='utilitiesContainer'>
                <div>Utilities</div>
                <div className="categories">
                    <input type="checkbox" name="checkboxx" /><label for="checkboxx">display </label>
                    <input type="checkbox" name="checkboxx" /><label for="checkboxx">display </label>
                    <input type="checkbox" name="checkboxx" /><label for="checkboxx">display </label>
                    <input type="checkbox" name="checkboxx" /><label for="checkboxx">display </label>
                </div>
            </div>
            <div className='filtersContainer'>
                <div>Filters</div>
                <input type="checkbox" name="checkboxx" /><label for="checkboxx">filter </label>
                <input type="checkbox" name="checkboxx" /><label for="checkboxx">filter </label>
                <input type="checkbox" name="checkboxx" /><label for="checkboxx">filter </label>
                <input type="checkbox" name="checkboxx" /><label for="checkboxx">filter </label>

            </div>
        </div>
    )
}

export default Sidebar;