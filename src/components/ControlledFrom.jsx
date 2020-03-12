import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  FormText
} from "reactstrap";
import serializeForm from "form-serialize";

export class ControlledFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
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
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      member: "",
      submit: ""
    });
    console.log(values);
  };

  render() {
    return (
      <Container className="w-50 my-3">
        <Form onSubmit={this.handleSubmit} className="mx-3 my-3">
          <FormGroup>
            <Label for="firstName">First Name:</Label>
            <Input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="Enter Your First Name Here"
              minLength="2"
              maxLength="8"
              required
            />
            <FormFeedback>Check Your FirstName Length</FormFeedback>
            <FormText color="muted">
              Your First Name Should be in 2-8 characters
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="firstName">Last Name:</Label>
            <Input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Please Enter Your Last Name Here"
              minLength="2"
              maxLength="8"
              required
            />
            <FormFeedback>Check Your LastName Length</FormFeedback>
            <FormText color="muted">
              Your Last Name should be 2-8 characters
            </FormText>
          </FormGroup>

          <FormGroup>
            <Label for="email">E-Mail ID:</Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Please Enter Your e-mail id"
              required
            />
            <FormText color="muted">Please Enter Your E-mail Id</FormText>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="firstName">Mobile Number:</Label>
            <Input
              type="tel"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
              placeholder="Please Enter Your Phone Number Here"
              minLength="10"
              maxLength="10"
              required
            />
            <FormFeedback>Check Your Email ID</FormFeedback>
            <FormText className="invalid-feedback">
              Your Mobile Number should be 10 numbers
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="member">Type of Member</Label>
            <Input
              type="select"
              value={this.state.member}
              onChange={this.handleChange}
              name="member"
              required
            >
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Investor">Investor</option>
              <option value="Incubator">Incubator</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Please Enter Your Pass Word Here"
              minLength="8"
              maxLength="32"
              required
            />
            <FormFeedback>Check Your Password Length</FormFeedback>
            <FormText color="muted">
              Your Password Should be 8-32 character length
            </FormText>
          </FormGroup>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ControlledFrom;
