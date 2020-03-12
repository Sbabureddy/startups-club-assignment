import React, { Component } from "react";
import serializeForm from "form-serialize";

export class ControlledFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: 0,
      password: "",
      member: "",
      submit: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    console.log(values);
  };

  render() {
    return (
      <div className="container w-50">
        <form onSubmit={this.handleSubmit} className="was-validated mx-3 my-3">
          <div className="form-row my-2">
            <div className="col-sm-12 col-md-6">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter Your First Name Here"
                minLength="2"
                maxLength="8"
                required
              />
              <div className="invalid-feedback">
                Please enter your first name
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="firstName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Please Enter Your Last Name Here"
                className="form-control"
                minLength="2"
                maxLength="8"
                required
              />
              <div className="invalid-feedback">Please Your Last Name Here</div>
            </div>
          </div>

          <div className="form-row mb-2">
            <label htmlFor="firstName">E-Mail ID:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Please Enter Your e-mail id"
              required
            />
            <div className="invalid-feedback">
              Please Enter Your E-mail Id Here
            </div>
          </div>
          <div className="form-row mb-2">
            <label htmlFor="firstName">Mobile Number:</label>
            <input
              type="tel"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Please Enter Your Phone Number Here"
              minLength="10"
              maxLength="10"
              required
            />
            <div className="invalid-feedback">Please Mobile Number Here</div>
          </div>
          <div className="form-group">
            <label htmlFor="member">Type of Member</label>
            <select
              className="form-control"
              value={this.state.member}
              onChange={this.handleChange}
              name="member"
              required
            >
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Investor">Investor</option>
              <option value="Incubator">Incubator</option>
            </select>
          </div>

          <div className="form-row mb-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Please Enter Your Pass Word Here"
              className="form-control"
              minLength="8"
              maxLength="32"
              required
            />
            <div className="invalid-feedback">
              Please Enter Your Password Here
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ControlledFrom;
