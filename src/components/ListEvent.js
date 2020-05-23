import React, { useEffect } from "react";
import Events from "./Event";
import { connect } from "react-redux";
import Preloader from "./Preloader";
import PropTypes from "prop-types";
import { getEvents } from "../actions/eventActions";

const ListEvent = ({ myevents: { myevent, loading }, getEvents }) => {
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);
  if (loading || myevent === null) {
    return <Preloader />;
  }
  return (
    <div className="row container" uk-grid="true">
      {!loading && myevent.length === 0 ? (
        <p className="center">No Events to show...</p>
      ) : (
        myevent.map((myevent) => <Events events={myevent} key={myevent.id} />)
      )}
    </div>
  );
};
ListEvent.propTypes = {
  myevents: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myevents: state.myevent,
});
export default connect(mapStateToProps, { getEvents })(ListEvent);
