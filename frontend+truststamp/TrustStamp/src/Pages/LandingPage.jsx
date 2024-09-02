import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import Frame3 from "../Frames/Frame3";
import Frame4 from "../Frames/Frame4";
import HoldingCollection from "../Frames/HoldingCollection";
import FrameAI from "../Frames/FrameAI";
import "./LandingPage.css";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

function LandingPage() {
  const [state, setState] = useState(0);
  const [text, setText] = useState("STEGANOGRAPHY");
  const [text1Left, setText1Left] = useState([
    <>
      <span style={{ color: "#EB0BFF" }}>Hide</span> your text
    </>,
    "or",
    <>
      <span style={{ color: "#EB0BFF" }}>Embedd</span> it inside the
    </>,
    "image and share",
  ]);
  const textControls = useAnimation();
  const text1LeftControls = useAnimation();
  const headingControls = useAnimation();
  const subHeadingControls = useAnimation();
  const centerImageControls = useAnimation();
  const frame3Controls = useAnimation();
  const frame4Controls = useAnimation();
  const holdingControl = useAnimation();
  const text2RightControls = useAnimation();
  const text2BottomControls = useAnimation();
  const frameAI = useAnimation();
  const [rectangle, setRectangle] = useState(0);
  const controls = useAnimation();
  const images = ["Frame 3.png", "Frame 4.png", "Center Image.png"];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setState((prev) => prev + 1);
      }
      if (event.key === "ArrowUp" && state > 0) {
        event.preventDefault();
        setState((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state]);
  useEffect(() => {
    const sequence = () => {
      if (state === 0) {
        controls.start({
          opacity: 0,
          position: "absolute",
        });
        setRectangle(0);
        headingControls.start({
          y: "28vh",
          x: "0vw",
          transition: { duration: 0.5 },
          fontSize: "6vw",
        });
        textControls.start({
          opacity: 0,
        });
        text1LeftControls.start({
          opacity: 0,
        });

        subHeadingControls.start({
          opacity: 1,
          y: "30vh",
          x: "0vw",
          fontSize: "2vw",
          transition: { duration: 0.5 },
        });

        centerImageControls.start({
          y: "55vh",
          opacity: 1,
          transition: { duration: 0.5 },
          width: "28.9vw",
          height: "35vw",
        });

        frame3Controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
          position: "absolute",
        });
        frame4Controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
          position: "absolute",
        });
      }
      if (state == 1) {
        setRectangle(1);
        headingControls.start({
          y: 20,
          x: "-42vw",
          transition: { duration: 0.5 },
          fontSize: "2vw",
          position: "relative",
        });

        subHeadingControls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });

        centerImageControls.start({
          y: "20vh",
          transition: { duration: 0.5 },
          width: "23vw",
          height: "28vw",
        });

        textControls.start({
          opacity: 0,
          x: "0vw",
          y: "10vw",
          transition: { duration: 0.5 },
        });
        text1LeftControls.start({
          opacity: 0,
          x: "0vw",
          y: "10vw",
          transition: { duration: 0.5 },
        });
        // Subsequent animations can be added here
      }
      if (state < 1) {
        textControls.start({
          opacity: 0,
        });
        text1LeftControls.start({
          opacity: 0,
        });
      }
      if (state == 2) {
        setText("STEGANOGRAPHY");
        textControls.start({
          opacity: 1,
          x: "27vw",
          y: "30vh",
          transition: { duration: 0.5 },
        });
        text1LeftControls.start({
          opacity: 1,
          x: "-20vw",
          y: "56vh",
          transition: { duration: 0.5 },
          textAlign: "right",
        });
        centerImageControls.start({
          x: "0vw",
          y: "20vh",
          transition: { duration: 0.5 },
          scale: 1,
          opacity: 1,
        });
        text2RightControls.start({
          opacity: 0,
          // x: "-21vw",
          // y: "10vw",
          transition: { duration: 0.5 },
        });
        text2BottomControls.start({
          opacity: 0,
          x: "23vw",
          y: "25vw",
          position: "absolute",
          transition: { duration: 0.5 },
        });
        frame3Controls.start({
          opacity: 0,
          x: "-25vw",
          y: "0vw",
          transition: { duration: 0.5 },
        });
        frame4Controls.start({
          opacity: 0,
          x: "5vw",
          y: "0vw",
          transition: { duration: 0.5 },
        });
      }
      if (state == 3) {
        setRectangle(1);
        text1LeftControls.start({
          opacity: 0,
          transition: { duration: 0.5 },
          x: "0vw",
          y: "55vh",
        });
        centerImageControls.start({
          x: "-15vw",
          y: "20vh",
          scale: 1.2,
          transition: { duration: 0.5 },
        });
        setText("STEGANOGRAPHY");
        textControls.start({
          opacity: 1,
          x: "30.5vw",
          y: "28vh",
          transition: { duration: 0.5 },
        });
        text2RightControls.start({
          opacity: 1,
          x: "26.5vw",
          y: "39vh",
          transition: { duration: 0.5 },
          fontSize: "1.3vw",
        });
        text2BottomControls.start({
          opacity: 1,
          x: "28vw",
          y: "90vh",
          transition: { duration: 0.5 },
          fontSize: "1.5vw",
        });
        frame3Controls.start({
          opacity: 1,
          x: "-27vw",
          y: "30vh",
          transition: { duration: 0.5 },
          zIndex: 0,
          position: "absolute",
        });
        frame4Controls.start({
          opacity: 1,
          x: "0vw",
          y: "30vh",
          transition: { duration: 0.5 },
          zIndex: 0,
          position: "absolute",
        });
      }
      if (state === 4) {
        setRectangle(2);
        frame3Controls.start({
          x: "-25vw",
          opacity: 0,
          transition: { duration: 0.5 },
        });
        frame4Controls.start({
          x: "5vw",
          opacity: 0,
          transition: { duration: 0.5 },
        });
        centerImageControls.start({
          x: "0vw",
          y: "10vw",
          scale: 1,
          transition: { duration: 0.5 },
        });
        text2BottomControls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
        text2RightControls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
        textControls.start({
          opacity: 0,
          x: "0vw",
          y: "0vw",
          transition: { duration: 0.5 },
        });
        text1LeftControls.start({
          opacity: 0,
          x: "0vw",
          y: "55vh",
          transition: { duration: 0.5 },
        });
        controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
      }

      if (state === 5) {
        setRectangle(2);
        setText("BLOCKCHAIN");
        setText1Left([
          <>
            Ensuring <span style={{ color: "#EB0BFF" }}>Trust</span>,
          </>,
          <>
            <span style={{ color: "#EB0BFF" }}>Transparency</span>, and
          </>,
          <>
            <span style={{ color: "#EB0BFF" }}>Security</span> in Every
          </>,
          "TrustStamp post and",
          "Interaction.",
        ]);
        text2BottomControls.start({
          x: "-10vw",
          y: "-5vw",
          transition: { duration: 0.5 },
          fontFamily: "Bayon",
          fontSize: "6vw",
          opacity: 0,
          lineHeight: 1,
        });
        textControls.start({
          opacity: 1,
          x: "23vw",
          y: "16vw",
          transition: { duration: 0.5 },
        });
        text1LeftControls.start({
          opacity: 1,
          x: "-20vw",
          y: "31vw",
          transition: { duration: 0.5 },
        });
        centerImageControls.start({
          x: "0vw",
          y: "20vh",
          transition: { duration: 0.5 },
          scale: 1,
          opacity: 1,
        });
        controls.start({
          x: "20%",
          transition: { duration: 1 },
          opacity: 0,
        });
        holdingControl.start({
          y: "28vw",
          x: "-44vw",
          transition: { duration: 0.5 },
          opacity: 0,
        });
      }

      if (state === 6) {
        setRectangle(2);
        controls.start({
          x: "-20%",
          transition: { duration: 1 },
          opacity: 1,
        });
        text1LeftControls.start({
          x: "-21vw",
          y: "10vw",
          transition: { duration: 0.5 },
          opacity: 0,
        });
        holdingControl.start({
          // y: "75vh",
          y: "0vh",
          x: "1vw",
          fontSize: "1.5vw",
          transition: { duration: 0.5 },
          opacity: 1,
        });
        centerImageControls.start({
          y: "5vw",
          scale: 1,
          transition: { duration: 0.5 },
        });
        textControls.start({
          y: "-12vw",
          transition: { duration: 0.5 },
        });
      }

      if (state === 7) {
        setRectangle(3);
        controls.start({
          x: "20%",
          transition: { duration: 2 },
          opacity: 0,
        });
        holdingControl.start({
          y: "28vw",
          x: "-44vw",
          transition: { duration: 0.5 },
          opacity: 0,
        });
        centerImageControls.start({
          y: "10vw",
          scale: 1,
          transition: { duration: 0.5 },
        });
        textControls.start({
          opacity: 0,
          x: "0vw",
          y: "0vw",
          transition: { duration: 0.5 },
        });
        text1LeftControls.start({
          x: "0vw",
          y: "0vw",
          transition: { duration: 0.5 },
          opacity: 0,
        });
      }
      if (state === 8) {
        setText("AI/ML");
        setText1Left([
          "Detecting Image",
          <>
            <span style={{ color: "#EB0BFF" }}>Alterations</span>, Ensuring
          </>,
          <>
            <span style={{ color: "#EB0BFF" }}>Authenticity</span> in
          </>,
          "TrustStamp's Vision",
        ]);

        textControls.start({
          opacity: 1,
          x: "17vw",
          y: "16vw",
          transition: { duration: 0.5 },
        });
        text1LeftControls.start({
          opacity: 1,
          x: "-20vw",
          y: "33vw",
          transition: { duration: 0.5 },
        });
        centerImageControls.start({
          x: "0vw",
          y: "10vw",
          transition: { duration: 0.5 },
          scale: 1,
          opacity: 1,
        });
        frameAI.start({
          opacity: 0,
          transition: { duration: 0.5 },
          zIndex: 0,
          scale: 0.9,
        });
      }

      if (state === 9) {
        setRectangle(3);
        setText("AI/ML");
        centerImageControls.start({
          scale: 1.1,
          y: "20vh",
          x: "0",
          transition: { duration: 0.5 },
        });
        textControls.start({
          x: "20vw",
          y: "65vh",
          fontSize: "5vw",
          transition: { duration: 0.5 },
          opacity: 1,
        });
        frameAI.start({
          opacity: 1,
          transition: { duration: 0.5 },
          zIndex: 0,
          scale: 0.9,
        });
        setText1Left([
          <>
            Vigilantly Detecting{" "}
            <span style={{ color: "#EB0BFF" }}>Tampered</span> Images,
          </>,
          <>
            Guaranteeing the Unaltered{" "}
            <span style={{ color: "#EB0BFF" }}>Authenticity</span>
          </>,
          "of Every Image Within TrustStamp's",
          <>
            <span style={{ color: "#EB0BFF" }}>Secure</span> Domain.
          </>,
        ]);
        text1LeftControls.start({
          x: "30.5vw",
          y: "50vh",
          fontSize: "1.5vw",
          textAlign: "left",
          fontFamily: "Inter",
          lineHeight: 1.5,
          transition: { duration: 0.5 },
          opacity: 1,
        });
      }
      if (state === 10) {
        setRectangle(4);
        setText("on your email");
        setText1Left(["Get The", "Recommendations"]);
        text1LeftControls.start({
          x: "-10vw",
          y: "35vh",
          transition: { duration: 0.5 },
          fontFamily: "Bayon",
          fontSize: "6vw",
          opacity: 1,
          lineHeight: 1,
        });
        centerImageControls.start({
          scale: 1.2,
          x: "30vw",
          transition: { duration: 0.5 },
          opacity: 1,
        });
        textControls.start({
          x: "3.5vw",
          y: "40vh",
          fontSize: "1.7vw",
          transition: { duration: 0.5 },
          opacity: 1,
        });
        frameAI.start({
          opacity: 0,
          transition: { duration: 0.5 },
          zIndex: 0,
          scale: 0.9,
        });
      }
      // Add more states as needed
    };

    sequence();
  }, [
    state,
    headingControls,
    subHeadingControls,
    centerImageControls,
    textControls,
    text1LeftControls,
    frame3Controls,
    text2RightControls,
    text2BottomControls,
    frame4Controls,
    controls,
    holdingControl,
    frameAI,
  ]);

  const bars = new Array(5).fill(null);

  return (
    <>
      <div style={{ position: "absolute", top: 10, right: 20 }}>
        <p style={{ display: "flex", flexDirection: "row" }}>
          {/* <span style={{ marginRight: "2vw", fontSize: "1.3vw" }}>Login</span> */}
          {/* <span style={{ fontSize: "1.3vw" }}>Sign Up</span> */}
          <LoginModal />
          <SignUpModal />
        </p>
      </div>
      <div className="flex  justify-center h-screen w-screen" style={{overflow: "hidden"}}>
        {/* Other elements */}

        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            flexDirection: "row",
            flexWrap: "nowrap",
            display: "flex",
            height: "10vw",
            width: "300vw",
          }}
          animate={controls}
        >
          {Array(20)
            .fill(images)
            .flat()
            .map((image, index) => (
              <img
                src={image}
                key={index}
                style={{ marginRight: "1vw", width: "8vw", height: "10vw" }}
              />
            ))}
        </motion.div>
        <div
          style={{
            position: "absolute",
            left: 10,
            top: "40%",
          }}
        >
          {bars.map((_, index) => (
            <motion.svg key={index} style={{ height: "30px" }}>
              <motion.rect
                width={rectangle === index ? "5vw" : "1vw"}
                height="16"
                rx="8"
                fill={rectangle === index ? "#C69FF9" : "#463A55"}
                animate={{
                  width: rectangle === index ? "10vw" : "5vw",
                  fill: rectangle === index ? "#C69FF9" : "#463A55",
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.svg>
          ))}
        </div>

        {<Frame3 controls={frame3Controls} />}
        {<Frame4 controls={frame4Controls} />}
        {<FrameAI controls={frameAI} />}

        <div className="flex flex-col items-center ">
          <motion.div
            animate={textControls}
            style={{
              position: "absolute",
              fontFamily: "Bayon",
              fontSize: "5vw",
              color: "#FABEFF",
            }}
            initial={{ opacity: 0 }}
          >
            {text}
          </motion.div>

          <motion.div
            animate={text1LeftControls}
            style={{
              position: "absolute",
              fontFamily: "Inter",
              fontSize: "1.5vw",
              textAlign: "right",
            }}
            initial={{ opacity: 0 }}
          >
            {text1Left.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            animate={text2RightControls}
            style={{
              position: "absolute",
              ffontFamily: "Inter",
              fontSize: "1.5vw",
              textAlign: "left",
            }}
            initial={{ opacity: 0 }}
          >
            Embedd it in Images for{" "}
            <span style={{ color: "#EB0BFF" }}>Secure</span> <br /> Sharing
          </motion.div>
          <div
            style={{
              display: "flex",
              width: "40vw",
              // border: "4px solid red",
              justifyContent: "flex-end",
            }}
          >
            <motion.div
              animate={text2BottomControls}
              style={{
                position: "absolute",
                fontFamily: "Inter",
                fontSize: "1.5vw",
                textAlign: "right",
                // border: "4px solid green",
                // width: "100vw",
              }}
              initial={{ opacity: 0 }}
            >
              Discreetly <span style={{ color: "#EB0BFF" }}>Embedd</span>{" "}
              Messages in Images, Share with Confidence – <br />
              <span style={{ color: "#75FFF7" }}>Where</span>{" "}
              <span style={{ color: "#EB0BFF" }}>Security</span>{" "}
              <span style={{ color: "#75FFF7" }}>Meets Artistry</span>
            </motion.div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100vw",
              position: "absolute",
              // border: "4px solid green",
              top: "75vh",
            }}
          >
            <HoldingCollection controls={holdingControl} />
          </div>

          <motion.h1
            animate={headingControls}
            style={{ fontFamily: "Monteserrat" }}
          >
            <Link to="/user" style={{ textDecoration: "none", color: "white" }}>
              TrustStamp
            </Link>
          </motion.h1>
          <motion.h2
            animate={subHeadingControls}
            style={{ fontFamily: "Monteserrat" }}
          >
            Generating <span style={{ color: "#EB0BFF" }}>Trust</span>: In every
            Click
          </motion.h2>

          <motion.img
            src="/Center Image.png"
            animate={centerImageControls}
            style={{ y: "0", zIndex: 10, width: "200px", height: "350px" }}
            initial={{ opacity: 0 }}
          />
        </div>
        {/* Other elements */}
      </div>
    </>
  );
}

export default LandingPage;
