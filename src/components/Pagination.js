import React from 'react';
import PropTypes from 'prop-types'

const Pagination = ({ page, totalPages, action }) =>
  <div className="u-flex u-flexJustifyCenter u-flexWrap">
    <button
      className="pagination-button"
      onClick={() => action(page - 1)}
      disabled={page === 1}
    >
      BACK
    </button>
    <span>{page} of {totalPages}</span>
    <button
      className="pagination-button"
      onClick={() => action(page + 1)}
      disabled={page === totalPages}
    >
      NEXT
    </button>
  </div>

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
};

export default Pagination;
