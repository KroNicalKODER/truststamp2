import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      password: "",
      name: "",
      error: null,
    };
  }

  handleClose = () => this.setState({ show: false, error: null });
  handleShow = () => this.setState({ show: true });

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, name } = this.state;

    try {
      // Make a POST request to your server's signup route
      const response = await fetch("http://localhost:5001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
        // credentials: "include", // Include credentials for cross-origin requests
      });

      // Handle the response from your server accordingly
      if (response.ok) {
        // Registration successful, you might want to redirect or update the UI
        this.handleClose();
      } else {
        // Registration failure, handle the error message
        const errorData = await response.json();
        this.setState({ error: errorData.error });
      }
    } catch (error) {
      // Handle any network or unexpected errors
      console.error("Error during signup:", error);
      this.setState({ error: "An unexpected error occurred" });
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
          Sign Up
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
            height: "60%",
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
              Sign Up
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

              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
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
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SignUpModal;
