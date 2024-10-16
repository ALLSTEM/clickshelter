import { useState } from "react";

const Pagination = ({ page, setPage, paginationData }) => {
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleNextPage = () => {
    if (page < paginationData.last_page) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const renderPage = (pageNumber, isActive = false) => {
    const className = `size-40 flex-center rounded-full cursor-pointer ${
      isActive ? "bg-dark-1 text-white" : ""
    }`;
    return (
      <div key={pageNumber} className="col-auto">
        <div className={className} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </div>
      </div>
    );
  };

  const renderPages = () => {
    const totalPages = paginationData.last_page; // Change this to the actual total number of pages
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    const pages = pageNumbers.map((pageNumber) =>
      renderPage(pageNumber, pageNumber === page)
    );
    return pages;
  };

  return (
    <div className="border-top-light mt-30 pt-30">
      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
        <div className="col-auto md:order-1">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            <i className="icon-chevron-left text-12" />
          </button>
        </div>

        <div className="col-md-auto md:order-3">
          <div className="row x-gap-20 y-gap-20 items-center md:d-none">
            {renderPages()}
          </div>

          <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">
            {renderPages()}
          </div>

          <div className="text-center mt-30 md:mt-10">
            <div className="text-14 text-light-1">
              {`${paginationData.from} - ${paginationData.to} of ${paginationData.total} spaces found `}
            </div>
          </div>
        </div>

        <div className="col-auto md:order-2">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            onClick={handleNextPage}
            disabled={page === paginationData.last_page}
          >
            <i className="icon-chevron-right text-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
