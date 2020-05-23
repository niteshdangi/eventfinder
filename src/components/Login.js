import React, { Component } from "react";
import { loginUser, clearError, setAuthLoading } from "../actions/userActions";
import { connect } from "react-redux";
import Preloader from "./Preloader";

class Login extends Component {
  state = { uid: "", mpid: "" };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidUpdate() {
    if (this.props.auth.auth !== null) {
      this.setState({ uid: "", mpid: "" });
      this.props.clearError();
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    if (this.props.auth.auth !== null) {
      this.props.history.push("/");
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.setAuthLoading();
    this.props.loginUser(this.state);
  };
  render() {
    if (this.props.auth.loading) {
      return <Preloader />;
    }
    return (
      <form
        onSubmit={this.onSubmit}
        className="form"
        style={{
          border: "1px solid #f2f2f2",
          borderRadius: 5,
          padding: 10,
          marginTop: 10,
        }}>
        <h2 className="header">Login</h2>
        {this.props.auth.error ? (
          <div className="alert alert-danger">{this.props.auth.error}</div>
        ) : null}
        <div className="form-group">
          <label htmlFor="uid" className="active">
            Email ID
          </label>
          <input
            name="uid"
            className="form-control"
            type="email"
            value={this.state.uid}
            autoComplete="false"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mpid" className="active">
            Password
          </label>
          <input
            name="mpid"
            className="form-control"
            value={this.state.mpid}
            type="text"
            autoComplete="false"
            onChange={this.onChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block form-control"
          value="Submit"
        />
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
  loginUser,
  clearError,
  setAuthLoading,
})(Login);
