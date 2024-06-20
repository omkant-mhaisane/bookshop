import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../index.css";
import { Link } from "react-router-dom";

function SignUp({ show, onHide, onLoginShow }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              {...register("name", { required: true })}
            />

            {errors.name && (
              <span className="text-red">This field is required</span>
            )}
          </Form.Group>
          <Form.Group controlId="formLastName" className="mt-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red">This field is required</span>
            )}
          </Form.Group>

          <Form.Group controlId="formMobile" className="mt-3">
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter mobile number"
              {...register("mobile", {
                required: "Mobile number is required",
                minLength: {
                  value: 10,
                  message: "Mobile number must be 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "Mobile number must be 10 digits",
                },
              })}
            />
            {errors.mobile && (
              <span className="text-red">{errors.mobile.message}</span>
            )}
          </Form.Group>
          <Form.Group controlId="formDOB" className="mt-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
            />
            {errors.dob && (
              <span className="text-red">{errors.dob.message}</span>
            )}
          </Form.Group>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <span className="text-red">This field is required</span>
            )}
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            {errors.email && (
              <span className="text-red">This field is required</span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Sign Up
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <Link
              href="#"
              onClick={() => {
                onHide();
                onLoginShow();
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignUp;
