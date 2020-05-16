import React from 'react';

const Pagination = ({goPrev, goNext, currentPage, totalItems}) => {
    const prevBtn = currentPage + 1 !== 1;
    const nextBtn = (currentPage + 1) * 3 < totalItems;

    return (
        <div className="pagination">
                <button className="btn"
                    onClick={goPrev}
                    disabled={!prevBtn}
                >
                    {prevBtn && "←"}
                </button>
                <span className="pagination__page">
                    {currentPage + 1}
                </span>
                <button className="btn"
                    onClick={goNext}
                    disabled={!nextBtn}
                >
                    {nextBtn && "→"}
                </button>
        </div>
    );
};

export default Pagination;