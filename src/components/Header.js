import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Logout } from "../actions/userActions";

class Header extends Component {
  render() {
    return (
      <nav
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "999999",
          top: 0,
          left: 0,
        }}
        className="navbar navbar-fixed-top navbar-default navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand" href="#">
          FindMyEvents
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="true"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto">
            {this.props.auth.auth !== null ? (
              <li className="nav-item">
                <span className="nav-link">{this.props.auth.auth.uid}</span>
              </li>
            ) : null}
            <li
              className={
                this.props.location.pathname === "/"
                  ? "nav-item active"
                  : "nav-item"
              }>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={
                this.props.location.pathname === "/events/add"
                  ? "nav-item active"
                  : "nav-item"
              }>
              <Link className="nav-link" to="/events/add">
                Add New Event
              </Link>
            </li>
            {this.props.auth.auth !== null ? (
              <li className="nav-item">
                <span className="nav-link" onClick={this.props.Logout}>
                  Logout
                </span>
              </li>
            ) : (
              <li
                className={
                  this.props.location.pathname === "/login"
                    ? "nav-item active"
                    : "nav-item"
                }>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
            {this.props.auth.auth !== null ? null : (
              <li
                className={
                  this.props.location.pathname === "/register"
                    ? "nav-item active"
                    : "nav-item"
                }>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
Header.propTypes = {
  auth: PropTypes.object.isRequired,
  Logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default withRouter(connect(mapStateToProps, { Logout })(Header));
