import React from "react";
import { Link } from "react-router-dom";
import { deleteEvent } from "../actions/eventActions";
import { connect } from "react-redux";

const Events = ({ events, deleteEvent, auth }) => {
  let text = events.about;

  if (text) {
    if (text.length > 250) {
      text = text.substr(0, 250);
    }
  }

  return (
    <div className="card" style={{ width: "100%", margin: 5 }}>
      <div className="card-body">
        <h5 className="card-title">{events.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <div>Venue: {events.location}</div>
          <div>Date : {events.date}</div>
          <div>Time : {events.time}</div>
        </h6>
        <p className="card-text">{text}</p>
        <Link to={"/events/" + events.id} className="card-link">
          <i className="fa fa-edit"></i> Edit
        </Link>
        {auth.auth !== null ? (
          <span
            className="card-link"
            onClick={() => deleteEvent(events.id)}
            style={{ float: "right", color: "red", cursor: "pointer" }}>
            <i className="fa fa-trash"></i> Delete
          </span>
        ) : (
          <Link
            className="card-link"
            to="/login"
            style={{ float: "right", color: "red", cursor: "pointer" }}>
            <i className="fa fa-signin"></i> Login Required
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deleteEvent })(Events);
