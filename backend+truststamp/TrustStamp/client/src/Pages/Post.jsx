import "./Page2.css";
// import LandingPage from "./LandingPage.jsx";

function Post() {
  return (
    <>
      <div className="flex-column  justify-center items-center m-10 p-3 w-[40vw]">
        <div className="flex justify-between items-center ">
          <div className="flex items-center flex-grow ">
            <img src="./Ellipse 7.png"></img>
            <p className="m-2">Joseph Leonardo</p>
          </div>
          <div className="bg-[#B60000] flex flex-0 justify-evenly items-center rounded-2xl h-6 pl-1 pr-1 pt-1 pb-1 ">
            <div className="ml-1">FLAG</div>
            <div className=" ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.1665 17.5V3.25002C4.1665 3.25002 4.89567 2.5 7.08317 2.5C9.27067 2.5 10.729 4 12.9165 4C15.104 4 15.8332 3.25 15.8332 3.25V12.25C15.8332 12.25 15.104 13 12.9165 13C10.729 13 9.27067 11.5 7.08317 11.5C4.89567 11.5 4.1665 12.25 4.1665 12.25"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center relative">
          <img
            className={"img-hover  rounded-2xl w-[40vw] h-[30vw]"}
            src="./image 3.png"
            alt=""
          />
          <div className="hover-text">
            <div className="flex m-2 flex-row  h-[80%]">
              <div className="w-[100%] m-2 flex-1 text-[0.8vw]">
                Likes: 1.3k <br />
                Comments: 400 <br />
                Shares: 1.1k
              </div>
              <div className="m-2 flex-1 flex-col text-[0.8vw] justify-center text-right">
                {/* <div className="bg-[#B809E4] w-[6vw] mb-15 rounded-xl p-1 pl-3 pr-3 flex justify-center items-center">
                      DECRYPT
                    </div> */}
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam cupiditate, quae provident officia quasi eligendi cum,
                  excepturi repellendus molestiae, vitae sequi ea error nostrum
                  consequuntur optio tenetur modi sunt esse reprehenderit
                </div>
              </div>
            </div>
            <div className="flex button-container">
              <button className="flex-1 m-2 flex justify-center like-button" style={{backgroundColor: 'transparent'}}>
                Like
              </button>
              <button className="flex-1 m-2 flex justify-center comment-button" style={{backgroundColor: 'transparent'}}>
                Comment
              </button>
              <button className="flex-1 m-2 flex justify-center" style={{backgroundColor: 'transparent'}}>Share</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
