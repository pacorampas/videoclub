import React from 'react';
import PropTypes from 'prop-types'

const Pagination = ({ page, totalPages, totalResults, action }) => <div>
  <button
    onClick={() => action(page - 1)}
    disabled={page === 1}
  >
    Prev
  </button>
  <span>{page} of {totalPages} ({totalResults})</span>
  <button
    onClick={() => action(page + 1)}
    disabled={page === totalPages}
  >
    Next
  </button>
</div>

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
};

export default Pagination;
