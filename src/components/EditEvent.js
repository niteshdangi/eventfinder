import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { withRouter } from "react-router";
import {
  updateEvent,
  getEvent,
  setCurrent,
  getEvents,
} from "../actions/eventActions";
import { Link } from "react-router-dom";

const EditEvent = ({
  current,
  loading,
  setCurrent,
  updateEvent,
  auth,
  history,
  getEvent,
  getEvents,
  id,
}) => {
  useEffect(() => {
    getEvent(id);
    getEvents();
  }, [id, getEvent, getEvents]);
  if (auth.auth === null) {
    history.push("/login");
  }
  if (loading || current === null) {
    return <div>Please Wait...</div>;
  }
  const onChange = (e) => {
    setCurrent({ ...current, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateEvent(current);
    history.push("/");
    setCurrent({
      id: "",
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
            autoComplete="false"
            required="true"
            value={current.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="active">
            Event Venue
          </label>
          <input
            name="location"
            required="true"
            className="form-control"
            type="text"
            value={current.location}
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
            value={current.date}
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
            value={current.time}
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
            value={current.about}
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
EditEvent.propTypes = {
  updateEvent: PropTypes.func.isRequired,
  getEvent: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
};
const mapStateToProps = (state, props) => ({
  myevents: state.myevent,
  current: state.myevent.current,
  loading: state.loading,
  id: props.match.params.id,
  history: props.history,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  updateEvent,
  getEvent,
  setCurrent,
  getEvents,
})(EditEvent);
