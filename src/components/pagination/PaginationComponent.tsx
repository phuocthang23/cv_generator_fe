import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";

const PaginationComponent = ({ total, onPageChange }: any) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(total / 12));
  }, [total]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center mx-auto pb-8 w-[1440px] px-[60px]">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationComponent;
