import { Icon, Pagination } from "semantic-ui-react";

const PagesBotton = ({ totalPages, handlePageChange }) => (
  <Pagination
    defaultActivePage={1}
    ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
    firstItem={{ content: <Icon name="angle double left" />, icon: true }}
    lastItem={{ content: <Icon name="angle double right" />, icon: true }}
    prevItem={{ content: <Icon name="angle left" />, icon: true }}
    nextItem={{ content: <Icon name="angle right" />, icon: true }}
    totalPages={totalPages}
    onPageChange={handlePageChange}
  />
);

export default PagesBotton;
