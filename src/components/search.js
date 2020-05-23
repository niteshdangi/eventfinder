import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchEvents } from "../actions/eventActions";

const Search = ({ searchEvents }) => {
  return (
    <div className="form-group">
      <input
        name="search"
        className="form-control"
        type="text"
        autoComplete="false"
        placeholder="Search Event..."
        onChange={(e) => searchEvents(e.target.value)}
      />
    </div>
  );
};
Search.propTypes = {
  searchEvents: PropTypes.func.isRequired,
};

export default connect(null, { searchEvents })(Search);
