import React, { useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveUserData } from "../redux/userActions";
import { AccountContext } from "../components/context/Account"; // Update the path accordingly

const LoginModal = ({ saveUserData }) => {
  const { setAccount } = useContext(AccountContext);

  const [state, setState] = React.useState({
    show: false,
    email: "",
    password: "",
    error: null,
  });

  const handleClose = () => setState({ ...state, show: false, error: null });
  const handleShow = () => setState({ ...state, show: true, error: null });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;

    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Authentication successful
        handleClose();
        const responseData = await response.json();
        saveUserData(responseData);
        setAccount(responseData); // Set user data to the context
      } else {
        // Authentication failure, handle the error message
        const errorData = await response.json();
        setState({ ...state, error: errorData.error });
      }
    } catch (error) {
      // Handle any network or unexpected errors
      console.error("Error during login:", error);
      setState({ ...state, error: "An unexpected error occurred" });
    }
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ fontSize: "1.3vw" }}
      >
        Log In
      </Button>

      <Modal
        show={state.show}
        onHide={handleClose}
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
        {/* ... (rest of the code remains unchanged) */}
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
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

LoginModal.propTypes = {
  saveUserData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUserData: (userData) => dispatch(saveUserData(userData)),
});

export default connect(null, mapDispatchToProps)(LoginModal);
