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
            return price.toFixed(2) + " $";
        case "Euro":
            return price.toFixed(2) * 0.95 + " €";
        case "PLN":
            return price.toFixed(2) * 3.9 + "PLN";
        default:
            return price.toFixed(2) + " $"
    }
}