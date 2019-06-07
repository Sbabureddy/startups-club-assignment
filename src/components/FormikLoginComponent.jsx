import React from "react";
import { Label, FormGroup, Col, Row, Button } from "reactstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short")
    .max(8, "Too Long"),
  phonenumber: Yup.string()
    .required("Required")
    .max(10, "phonenumber should be 10 digits long"),
  member: Yup.string().required("Required"),
  message: Yup.string().required("Required")
});

const FormikLogin = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phonenumber: "",
        member: "",
        message: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        alert(JSON.stringify(values));
      }}
    >
      {({ errors, touched }) => (
        <div className="container">
          <Form>
            <FormGroup>
              <Row>
                <Col sm={12} md={6}>
                  <Label>First Name: </Label>
                  <Field name="firstName" className="form-control col" />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </Col>
                <Col sm={12} md={6}>
                  <Label>Last Name:</Label>
                  <Field name="lastName" className="form-control" />
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </Col>
              </Row>
            </FormGroup>
            <FormGroup row>
              <Col sm={12} md={6}>
                <Label>E-Mail :</Label>
                <Field name="email" type="email" className="form-control" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </Col>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col sm={12} md={6}>
                  <Label>Password:</Label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col sm={12} md={6}>
                  <Label>Phone Number</Label>
                  <Field
                    name="phonenumber"
                    type="text"
                    className="form-control"
                  />
                  {errors.phonenumber && touched.phonenumber ? (
                    <div>{errors.phonenumber}</div>
                  ) : null}
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col sm={12} md={6}>
                  <Label>Type of Member</Label>
                  <Field
                    name="member"
                    component="select"
                    className="form-control"
                  >
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Investor">Investor</option>
                    <option value="Incubator">Incubator</option>
                    {errors.member && touched.member ? (
                      <h4>{errors.member}</h4>
                    ) : null}
                  </Field>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Label>Send Your Feedback:</Label>
                <Field
                  component="textarea"
                  name="message"
                  className="form-control"
                />
                {errors.message && touched.message ? (
                  <div>{errors.message}</div>
                ) : null}
              </Row>
            </FormGroup>

            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);

export default FormikLogin;
