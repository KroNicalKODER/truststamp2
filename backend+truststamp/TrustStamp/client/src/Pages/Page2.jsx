import "./Page2.css";
import Post from "./Post";
import userInfoPage from "./userInfoPage";

function Page2() {
  return (
    <>
      <div className="flex justify-between mt-5 mr-5 ml-5 ">
        <div>
          <p style={{ fontSize: "2vw" }}>Truststamp</p>

        </div>
        <div className="flex gap-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M29.2825 17.8744C30.3178 17.8488 31.1362 16.9889 31.1107 15.9537C31.085 14.9185 30.2252 14.1 29.19 14.1256L29.2825 17.8744ZM15.7666 30.4825H17.6416C17.6416 30.4685 17.6415 30.4545 17.6411 30.4403L15.7666 30.4825ZM15.7666 36.275L15.8644 38.1475C16.8606 38.0955 17.6416 37.2725 17.6416 36.275H15.7666ZM15.7666 44L15.6689 45.8725C15.7014 45.8743 15.734 45.875 15.7666 45.875V44ZM23.5496 45.875C24.5851 45.875 25.4245 45.0355 25.4245 44C25.4245 42.9645 24.5851 42.125 23.5496 42.125V45.875ZM27.3612 16C27.3612 17.0355 28.2008 17.875 29.2362 17.875C30.2717 17.875 31.1112 17.0355 31.1112 16H27.3612ZM31.1112 10C31.1112 8.96448 30.2717 8.125 29.2362 8.125C28.2008 8.125 27.3612 8.96448 27.3612 10H31.1112ZM29.2825 14.1256C28.2475 14.1 27.3875 14.9185 27.3618 15.9537C27.3363 16.9889 28.1547 17.8488 29.19 17.8744L29.2825 14.1256ZM42.706 30.4825L40.8313 30.4403C40.831 30.4545 40.831 30.4685 40.831 30.4825H42.706ZM42.706 36.275H40.831C40.831 37.2725 41.612 38.0955 42.6083 38.1475L42.706 36.275ZM42.706 44V45.875C42.7385 45.875 42.771 45.8743 42.8037 45.8725L42.706 44ZM34.923 42.125C33.8875 42.125 33.048 42.9645 33.048 44C33.048 45.0355 33.8875 45.875 34.923 45.875V42.125ZM25.422 44.0067C25.4258 42.9712 24.5893 42.1287 23.5538 42.125C22.5183 42.1213 21.6759 42.9577 21.6722 43.9932L25.422 44.0067ZM25.212 48.25L26.5805 46.9683L26.5773 46.965L25.212 48.25ZM33.2558 48.25L31.8902 46.965L31.8872 46.9683L33.2558 48.25ZM36.7955 43.9932C36.7917 42.9577 35.9492 42.1213 34.9137 42.125C33.8783 42.1287 33.0417 42.9712 33.0455 44.0067L36.7955 43.9932ZM23.5447 42.125C22.5092 42.125 21.6697 42.9645 21.6697 44C21.6697 45.0355 22.5092 45.875 23.5447 45.875V42.125ZM34.923 45.875C35.9585 45.875 36.798 45.0355 36.798 44C36.798 42.9645 35.9585 42.125 34.923 42.125V45.875ZM29.19 14.1256C20.495 14.3405 13.6941 21.7233 13.8921 30.5247L17.6411 30.4403C17.4876 23.6166 22.7434 18.0361 29.2825 17.8744L29.19 14.1256ZM13.8916 30.4825V36.275H17.6416V30.4825H13.8916ZM15.6689 34.4025C12.6263 34.5615 10.3125 37.122 10.3125 40.1375H14.0625C14.0625 39.034 14.8961 38.198 15.8644 38.1475L15.6689 34.4025ZM10.3125 40.1375C10.3125 43.153 12.6263 45.7135 15.6689 45.8725L15.8644 42.1275C14.8961 42.077 14.0625 41.241 14.0625 40.1375H10.3125ZM15.7666 45.875H23.5496V42.125H15.7666V45.875ZM31.1112 16V10H27.3612V16H31.1112ZM29.19 17.8744C35.7292 18.0361 40.9848 23.6166 40.8313 30.4403L44.5805 30.5247C44.7785 21.7233 37.9775 14.3405 29.2825 14.1256L29.19 17.8744ZM40.831 30.4825V36.275H44.581V30.4825H40.831ZM42.6083 38.1475C43.5765 38.198 44.41 39.034 44.41 40.1375H48.16C48.16 37.122 45.8462 34.5615 42.8037 34.4025L42.6083 38.1475ZM44.41 40.1375C44.41 41.241 43.5765 42.077 42.6083 42.1275L42.8037 45.8725C45.8462 45.7135 48.16 43.153 48.16 40.1375H44.41ZM42.706 42.125H34.923V45.875H42.706V42.125ZM21.6722 43.9932C21.6648 46.0518 22.44 48.0405 23.8465 49.535L26.5773 46.965C25.8375 46.1787 25.4183 45.1182 25.422 44.0067L21.6722 43.9932ZM23.8435 49.5317C25.2442 51.0273 27.1895 51.8822 29.2337 51.8822V48.1322C28.2422 48.1322 27.283 47.7183 26.5805 46.9683L23.8435 49.5317ZM29.2337 51.8822C31.2782 51.8822 33.2235 51.0273 34.6243 49.5317L31.8872 46.9683C31.1847 47.7183 30.2252 48.1322 29.2337 48.1322V51.8822ZM34.621 49.535C36.0278 48.0405 36.8027 46.0518 36.7955 43.9932L33.0455 44.0067C33.0495 45.1182 32.6302 46.1787 31.8902 46.965L34.621 49.535ZM23.5447 45.875H34.923V42.125H23.5447V45.875Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 18 16"
              fill="none"
            >
              <g>
                <path
                  d="M10.125 1.8335C10.4356 1.8335 10.6875 1.60964 10.6875 1.3335C10.6875 1.05736 10.4356 0.833496 10.125 0.833496V1.8335ZM17.0625 7.00016C17.0625 6.72403 16.8106 6.50016 16.5 6.50016C16.1894 6.50016 15.9375 6.72403 15.9375 7.00016H17.0625ZM0.9375 7.00016C0.9375 7.2763 1.18934 7.50016 1.5 7.50016C1.81066 7.50016 2.0625 7.2763 2.0625 7.00016H0.9375ZM2.30513 10.4178C2.18625 10.1626 1.8572 10.0415 1.57019 10.1472C1.28318 10.2528 1.14689 10.5453 1.26577 10.8004L2.30513 10.4178ZM10.2991 14.5133L10.7057 13.9028L9.73748 13.3934L9.3309 14.004L10.2991 14.5133ZM7.29434 13.9028L7.70093 14.5133L8.66902 14.004L8.26245 13.3934L7.29434 13.9028ZM9.3309 14.004C9.18638 14.221 8.81362 14.221 8.66902 14.004L7.70093 14.5133C8.28113 15.3846 9.71887 15.3846 10.2991 14.5133L9.3309 14.004ZM7.875 1.8335H10.125V0.833496H7.875V1.8335ZM15.9375 7.00016V7.66683H17.0625V7.00016H15.9375ZM5.85187 12.1612C4.91029 12.1468 4.41692 12.0936 4.03019 11.9512L3.59968 12.875C4.20341 13.0973 4.89104 13.1466 5.83249 13.161L5.85187 12.1612ZM1.26577 10.8004C1.70346 11.7397 2.543 12.486 3.59968 12.875L4.03019 11.9512C3.24917 11.6636 2.62865 11.112 2.30513 10.4178L1.26577 10.8004ZM15.9375 7.66683C15.9375 8.45023 15.9372 9.01276 15.9032 9.45663C15.8694 9.89603 15.8045 10.1826 15.6949 10.4178L16.7342 10.8004C16.9101 10.4231 16.9879 10.015 17.0255 9.5247C17.0628 9.0389 17.0625 8.43656 17.0625 7.66683H15.9375ZM12.1675 13.161C13.109 13.1466 13.7966 13.0973 14.4003 12.875L13.9698 11.9512C13.5831 12.0936 13.0897 12.1468 12.1481 12.1612L12.1675 13.161ZM15.6949 10.4178C15.3713 11.112 14.7508 11.6636 13.9698 11.9512L14.4003 12.875C15.457 12.486 16.2965 11.7397 16.7342 10.8004L15.6949 10.4178ZM7.875 0.833496C6.65836 0.833496 5.70638 0.83297 4.94708 0.897143C4.17942 0.962023 3.55084 1.09654 2.99672 1.39838L3.58454 2.25102C3.93218 2.06165 4.36826 1.95057 5.05357 1.89265C5.74725 1.83402 6.63657 1.8335 7.875 1.8335V0.833496ZM2.0625 7.00016C2.0625 5.89934 2.06309 5.10883 2.12905 4.49222C2.19421 3.88306 2.31917 3.49544 2.53221 3.18642L1.57299 2.66392C1.23343 3.15646 1.08209 3.7152 1.0091 4.39757C0.936908 5.0725 0.9375 5.9187 0.9375 7.00016H2.0625ZM2.99672 1.39838C2.41646 1.71446 1.92858 2.14812 1.57299 2.66392L2.53221 3.18642C2.79504 2.80518 3.15564 2.48464 3.58454 2.25102L2.99672 1.39838ZM8.26245 13.3934C8.1102 13.1647 7.97655 12.9629 7.84657 12.8044C7.70963 12.6374 7.55265 12.4871 7.33489 12.3745L6.76929 13.239C6.80485 13.2573 6.85329 13.2908 6.93739 13.3934C7.02842 13.5044 7.13126 13.6578 7.29434 13.9028L8.26245 13.3934ZM5.83249 13.161C6.16181 13.1661 6.3704 13.1698 6.52941 13.1854C6.67799 13.2001 6.73558 13.2215 6.76929 13.239L7.33489 12.3745C7.11532 12.261 6.88684 12.2145 6.65323 12.1915C6.43004 12.1696 6.16031 12.166 5.85187 12.1612L5.83249 13.161ZM10.7057 13.9028C10.8687 13.6578 10.9715 13.5044 11.0626 13.3934C11.1467 13.2908 11.1951 13.2573 11.2306 13.239L10.6651 12.3745C10.4474 12.4871 10.2903 12.6374 10.1534 12.8044C10.0234 12.9629 9.8898 13.1647 9.73748 13.3934L10.7057 13.9028ZM12.1481 12.1612C11.8397 12.166 11.57 12.1696 11.3468 12.1915C11.1131 12.2145 10.8847 12.261 10.6651 12.3745L11.2306 13.239C11.2644 13.2215 11.322 13.2001 11.4706 13.1854C11.6296 13.1698 11.8382 13.1661 12.1675 13.161L12.1481 12.1612Z"
                  fill="white"
                />
                <path
                  d="M14.25 5.3335C15.4926 5.3335 16.5 4.43807 16.5 3.3335C16.5 2.22893 15.4926 1.3335 14.25 1.3335C13.0074 1.3335 12 2.22893 12 3.3335C12 4.43807 13.0074 5.3335 14.25 5.3335Z"
                  stroke="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_771_383">
                  <rect width="18" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      <div className="flex flex-col w-screen">
        <div className="flex flex-row justify-between w-screen">
          <div className="stats flex flex-col items-center gap-6 mt-20 ml-10 ">
            <div className="mt-5 mb-5">
              <p>WEEKLY ANALYTICS</p>
            </div>
            <div className="flex flex-row items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 88 88"
                fill="none"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="35"
                  stroke="#9AFFF9"
                  strokeWidth="6"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="18"
                  fill="white"
                >
                  62 hr
                </text>
              </svg>
              <div>
                <p className="text-[1vw]">Weekly Active Time</p>
                <p className="text-[0.7vw]">6% higher than Average</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 88 88"
                fill="none"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="35"
                  stroke="#9AFFF9"
                  strokeWidth="6"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="18"
                  fill="white"
                >
                  600
                </text>
              </svg>
              <div>
                <p className="text-[1vw]">Weekly Like Counts</p>
                <p className="text-[0.7vw]"> -10% than the previous week</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 88 88"
                fill="none"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="35"
                  stroke="#9AFFF9"
                  strokeWidth="6"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="18"
                  fill="white"
                >
                  1.5k
                </text>
              </svg>
              <div>
                <p className="text-[1vw]">Post Interactions</p>
                <p className="text-[0.7vw]">-15% than the previous week</p>
              </div>
            </div>
          </div>
          <div>
            <userInfoPage></userInfoPage>
            <Post />
            <Post />{" "}
          </div>
          <div className="m-10 mt-20 flex  w-[25vw] flex-col gap-10 ">
            <div className="recently-liked flex flex-col items-center ">
              <div className="mt-2">Recently Liked</div>
              <div className="flex gap-3 m-2  p-2">
                <img
                  className="flex-1 w-[6vw] h-[8vh] rounded-md"
                  src="./image 3.png"
                />
                <img
                  className="flex-1 w-[6vw] h-[8vh] rounded-md"
                  src="./image 3.png"
                />
                <img
                  className="flex-1 w-[6vw] h-[8vh] rounded-md"
                  src="./image 3.png"
                />
              </div>
            </div>
            <div className="add-post flex  items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                className="ml-10"
              >
                <circle
                  cx="24.5"
                  cy="24.5"
                  r="22.5"
                  stroke="white"
                  strokeWidth="4"
                />
                <line
                  x1="15"
                  y1="24.5"
                  x2="33"
                  y2="24.5"
                  stroke="white"
                  strokeWidth="4"
                />
                <line
                  x1="24.5"
                  y1="15"
                  x2="24.5"
                  y2="33"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>
              <p className="mr-[5vw]">Click to add post</p>
            </div>
          </div>{" "}
          {/* Take 1 times as much space */}
        </div>
      </div>
    </>
  );
}

export default Page2;
