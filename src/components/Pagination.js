
import ReactPaginate from "react-paginate";

function PaginationComp({paginatMovieData, pages}) {

    const handlePageClick = (data) => {
        console.log(data)
        paginatMovieData(data.selected + 1)
        
    }
    const pageCount = pages
  return (
    <div className="w-100 d-flex justify-content-center mt-3" >
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className=" list-unstyled d-flex justify-content-between  paginat"
        activeClassName="active"
      />
    </div>
  );
}

export default PaginationComp;
