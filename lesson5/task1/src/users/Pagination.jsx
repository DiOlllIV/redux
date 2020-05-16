import React from 'react';

const Pagination = ({goPrev, goNext, currentPage, totalItems}) => {
    const prevPage = currentPage + 1 !== 1;
    const nextPage = (currentPage + 1) * 3 < totalItems;

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