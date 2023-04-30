const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

export const firstPageHandler = ({ currentPage, setCurrentPage }) => {
    if (currentPage > 1) { scrollToTop(); setCurrentPage(1) }
};
export const prevPageHandler = ({ currentPage, setCurrentPage }) => {
    if (currentPage > 1) { scrollToTop(); setCurrentPage(currentPage => currentPage - 1) }
};
export const nextPageHandler = ({ currentPage, setCurrentPage, numbers }) => {
    if (currentPage < numbers?.length) { scrollToTop(); setCurrentPage(currentPage => currentPage + 1) }
};
export const lastPageHandler = ({ currentPage, setCurrentPage, numbers }) => {
    if (currentPage < numbers?.length) { scrollToTop(); setCurrentPage(numbers.length) }
};