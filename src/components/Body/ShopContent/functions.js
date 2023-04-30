const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

export const firstPageHandler = (currentPage, setCurrentPage) => {
    if (currentPage > 1) {
        scrollToTop();
        setCurrentPage(1);
        console.log("first")
    }
};
export const prevPageHandler = (currentPage, setCurrentPage) => {
    if (currentPage > 1) {
        scrollToTop();
        setCurrentPage(currentPage => currentPage - 1);
        console.log("prev")
    }
};
export const nextPageHandler = (currentPage, setCurrentPage, nPage) => {
    if (currentPage < nPage) {
        scrollToTop();
        setCurrentPage(currentPage => currentPage + 1);
        console.log("next")
    }
};
export const lastPageHandler = (currentPage, setCurrentPage, nPage) => {
    if (currentPage < nPage) {
        scrollToTop();
        setCurrentPage(nPage);
        console.log("last")
    }
};

export const priceConverted = (price, currency) => {
    switch (currency) {
        case "USD":
            return Math.ceil(price, 2).toFixed(2) + " $";
        case "Euro":
            return Math.ceil(price * 0.95, 2).toFixed(2) + " €";
        case "PLN":
            return Math.ceil(price * 3.9, 2).toFixed(2) + "PLN";
        default:
            return Math.ceil(price, 2).toFixed(2) + " $"
    }
}