import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { addEvent, getEvents } from "../actions/eventActions";
import { Link } from "react-router-dom";

const AddNewEvent = ({ addEvent, getEvents, history, auth }) => {
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);
  const [newEvent, setNewEvent] = React.useState({
    name: "",
    location: "",
    date: "",
    time: "",
    about: "",
  });
  const onChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };
  if (auth.auth === null) {
    history.push("/login");
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addEvent(newEvent);
    history.push("/");
    setNewEvent({
      name: "",
      location: "",
      date: "",
      time: "",
      about: "",
    });
  };

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <Link to="/" className="link">
        <i className="fa fa-arrow-left"></i> Back
      </Link>

      <form
        onSubmit={onSubmit}
        className="form"
        style={{
          border: "1px solid #f2f2f2",
          borderRadius: 5,
          padding: 10,
          marginTop: 10,
        }}>
        <div className="form-group">
          <label htmlFor="name" className="active">
            Event Name
          </label>
          <input
            name="name"
            className="form-control"
            type="text"
            required="true"
            autoComplete="false"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="active">
            Event Venue
          </label>
          <input
            name="location"
            className="form-control"
            required="true"
            type="text"
            autoComplete="false"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date" className="active">
            Event Date
          </label>
          <input
            name="date"
            className="form-control"
            type="text"
            required="true"
            autoComplete="false"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time" className="active">
            Event Timings
          </label>
          <input
            name="time"
            className="form-control"
            type="text"
            required="true"
            autoComplete="false"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="about" className="active">
            About Event
          </label>
          <textarea
            name="about"
            required="true"
            className="form-control"
            type="textarea"
            autoComplete="false"
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block form-control"
          value="Submit"
        />
      </form>
    </div>
  );
};
AddNewEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
  getEvents: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default withRouter(
  connect(mapStateToProps, { addEvent, getEvents })(AddNewEvent)
);
