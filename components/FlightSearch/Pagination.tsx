import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  goToPage,
}) => {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1.5 rounded-md text-sm ${
          currentPage === 1
            ? "cursor-not-allowed bg-slate-100 text-slate-500"
            : "cursor-pointer text-primary-100 border border-slate-300 bg-white"
        }`}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const pageNumber = i + 1;
        if (
          pageNumber === 1 ||
          pageNumber === totalPages ||
          (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
        ) {
          return (
            <button
              key={i}
              onClick={() => goToPage(pageNumber)}
              className={`px-3 py-1.5 rounded-md text-sm cursor-pointer transition-all duration-300 ${
                currentPage === pageNumber
                  ? "bg-primary-100 text-white"
                  : "text-primary-100 border border-slate-300 bg-white"
              }`}
            >
              {pageNumber}
            </button>
          );
        }
        return null;
      })}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1.5 rounded-md text-sm ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-slate-100 text-slate-500"
            : "cursor-pointer text-primary-100 border border-slate-300 bg-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
