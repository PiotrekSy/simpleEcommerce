import './Sidebar.scss'

const Sidebar = () => {

    return (
        <div className="sidebarContainer">
            <div className='utilitiesContainer'>
                <div>Utilities</div>
                <div className="categories">
                    <input type="checkbox" name="checkboxx1" /><label htmlFor="checkboxx1">display </label>
                    <input type="checkbox" name="checkboxx2" /><label htmlFor="checkboxx2">display </label>
                    <input type="checkbox" name="checkboxx3" /><label htmlFor="checkboxx3">display </label>
                    <input type="checkbox" name="checkboxx4" /><label htmlFor="checkboxx4">display </label>
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