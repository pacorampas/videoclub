import React from 'react';
import PropTypes from 'prop-types'

const PointsBar = ({ points, max, color }) => <div className="points-bar">
  <div
    className="points-bar-indicator"
    style={{ width: `${points * 100 / max}%`, background: color }}
    />
  <span className="points-bar-data">{points.toFixed(1)}/{max.toFixed(1)}</span>
</div>

PointsBar.propTypes = {
  points: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default PointsBar;
