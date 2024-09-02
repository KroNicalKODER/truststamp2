import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { saveUserData } from "../redux/userActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      password: "",
      error: null,
      success: false,
    };
  }

  handleClose = () =>
    this.setState({ show: false, error: null, success: false });
  handleShow = () => this.setState({ show: true, error: null, success: false });

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);

      if (response.ok) {
        // Authentication successful
        // this.handleClose();
        const responseData = await response.json();
        this.props.saveUserData(responseData);
        console.log(responseData);
        this.setState({ success: true });
      } else {
        // Authentication failure, handle the error message
        const errorData = await response.json();
        this.setState({ error: errorData.error, success: false });
      }
    } catch (error) {
      // Handle any network or unexpected errors
      console.error("Error during login:", error);
      this.setState({ error: "An unexpected error occurred", success: false });
    }
  };

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={this.handleShow}
          style={{ fontSize: "1.3vw" }}
        >
          Log In
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "40%",
            maxHeight: "80%",
            background: "#0E0021",
            backdropFilter: "blur(4px)",
            borderRadius: "30px",
            border: "2px solid #EB0BFF",
            zIndex: "1000",
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{ fontSize: "2vw", margin: "2vw", marginBottom: "0vw" }}
            >
              Log In
            </Modal.Title>
            <Button
              variant="link"
              onClick={this.handleClose}
              style={{ position: "absolute", top: 20, right: 0 }}
            >
              X
            </Button>
          </Modal.Header>
          <Modal.Body
            style={{
              marginLeft: "6vw",
              marginRight: "auto",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.handleChange}
                  style={{
                    backgroundColor: "white",
                    width: "80%",
                    borderRadius: "5px",
                    paddingLeft: "10px",
                    height: "3vw",
                    color: "black",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  style={{
                    backgroundColor: "white",
                    width: "80%",
                    borderRadius: "5px",
                    paddingLeft: "10px",
                    height: "3vw",
                    color: "black",
                  }}
                />
              </Form.Group>

              {this.state.error && (
                <p style={{ color: "red" }}>{this.state.error}</p>
              )}

              <Button
                variant="primary"
                type="submit"
                style={{ fontSize: "1.5vw", marginLeft: -20 }}
              >
                Submit
              </Button>

              {this.state.success && (
                // <Link to="/about">
                <Button
                  variant="primary"
                  style={{
                    fontSize: "1.3vw",
                    marginLeft: 10,
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() =>
                    (window.location.href = "http://localhost:5173/about")
                  }
                >
                  Go to Feed
                </Button>
                // </Link>
              )}
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

LoginModal.propTypes = {
  saveUserData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserData: (userData) => dispatch(saveUserData(userData)),
});

export default connect(null, mapDispatchToProps)(LoginModal);
