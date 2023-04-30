import "./PaginationNav.scss"
import {
    firstPageHandler,
    prevPageHandler,
    nextPageHandler,
    lastPageHandler,
} from '../functions.js';

const PaginationNav = ({ setCurrentPage, currentPage, nPage }) => {

    return (
        <div className="navigationContainer" >
            <button
                type="button"
                className="arrowButton"
                onClick={() => firstPageHandler(currentPage, setCurrentPage)}>
                {'<<'}
            </button>
            <button
                type="button"
                className="arrowButton"
                onClick={() => prevPageHandler(currentPage, setCurrentPage)}>
                {'<'}
            </button>

            <div className="pagesDisplay">
                {currentPage}{' / '}{nPage}
            </div>

            <button
                type="button"
                className="arrowButton"
                onClick={() => nextPageHandler(currentPage, setCurrentPage, nPage)}>
                {'>'}
            </button>
            <button
                type="button"
                className="arrowButton"
                onClick={() => lastPageHandler(currentPage, setCurrentPage, nPage)}>
                {'>>'}
            </button>
        </div>
    )
}

export default PaginationNav;