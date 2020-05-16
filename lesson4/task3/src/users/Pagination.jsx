import React from 'react';

const Pagination = ({goPrev, goNext, currentPage, totalItems, itemsPerPage}) => {
    const prevPage = currentPage > 0;
    const nextPage = currentPage < Math.ceil(totalItems / itemsPerPage) - 1;

    return (
        <div className="pagination">
                <button className="btn"
                    onClick={goPrev}
                    disabled={!prevPage}
                >
                    {prevPage && "←"}
                </button>
                <span className="pagination__page">
                    {currentPage + 1}
                </span>
                <button className="btn"
                    onClick={goNext}
                    disabled={!nextPage}
                >
                    {nextPage && "→"}
                </button>
        </div>
    );
};

export default Pagination;