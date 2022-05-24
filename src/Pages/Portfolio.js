import React, { Fragment } from "react";
import profile from "../assets/images/profile2.jpg";
import contactMe from "../assets/images/contactUs.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Portfolio = () => {
  const communication = 95;

  const teamWork = 90;

  const projectManagement = 80;

  const creativity = 75;

  return (
    <Fragment>
      <section>
        {/* About me Information */}
        <div class="hero min-h-screen px-16">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="avatar">
              <div class="w-72 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2">
                <img src={profile} alt="" />
              </div>
            </div>
            <div>
              <h1 class="text-3xl md:text-5xl lg:text-7xl text-secondary font-serif font-bold">
                I'm Web <span className="text-primary">Developer</span> Mohammad
                Faisal
              </h1>
              <p class="py-6 w-1/2">
                Hey, I'm a Front End Developer near{" "}
                <span className="font-bold text-primary">
                  {" "}
                  Developer Build.
                </span>{" "}
                I love structure and order and I also stand for quality. I love
                spending time on fixing little details and optimizing Code Link.
                Also I like working in a team, you'll learn faster and much
                more. As the saying goes, two heads are better than one.
              </p>
              <button class="btn btn-primary">Here me</button>
            </div>
          </div>
        </div>

        {/* Technical Skills & Professional Skills */}
        <div className="flex gap-x-16 items-center px-16 pb-20 flex-col lg:flex-row">
          <div class="card flex-1 text-center bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-2xl font-bold uppercase">Technical Skills</h2>
              <div className="flex justify-between">
                <h1>HTML</h1>
                <h4>98%</h4>
              </div>
              <progress
                class="progress progress-success bg-base-200 w-full"
                value="98"
                max="100"
              ></progress>
              <div className="flex justify-between">
                <h1>CSS</h1>
                <h4>90%</h4>
              </div>
              <progress
                class="progress  progress-success bg-base-200 w-full"
                value="90"
                max="100"
              ></progress>
              <div className="flex justify-between">
                <h1>Bootstrap</h1>
                <h4>85%</h4>
              </div>
              <progress
                class="progress progress-success bg-base-200 w-full"
                value="85"
                max="100"
              ></progress>

              <div className="flex justify-between">
                <h1>JavaScript</h1>
                <h4>78%</h4>
              </div>
              <progress
                class="progress progress-success bg-base-200 w-full"
                value="78"
                max="100"
              ></progress>
              <div className="flex justify-between">
                <h1>React</h1>
                <h4>75%</h4>
              </div>
              <progress
                class="progress progress-success bg-base-200 w-full"
                value="75"
                max="100"
              ></progress>
              <div className="flex justify-between">
                <h1>Mongodb</h1>
                <h4>70%</h4>
              </div>
              <progress
                class="progress progress-success bg-base-200 w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>

          <div class="card flex-1 mt-10 lg:mt-0 bg-base-100 text-center shadow-xl">
            <div class="card-body">
              <h2 class="text-2xl font-bold uppercase">Professional Skills</h2>

              <div className=" grid grid-cols-2 mx-auto gap-24">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={communication}
                    text={`${communication}%`}
                  />
                  <h2 className="text-xl">Communication</h2>
                </div>

                <div className="w-24 h-24">
                  <CircularProgressbar value={teamWork} text={`${teamWork}%`} />
                  <h2 className="text-xl">Team Work</h2>
                </div>

                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={projectManagement}
                    text={`${projectManagement}%`}
                  />
                  <h2 className="text-xl">Project Management</h2>
                </div>

                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={creativity}
                    text={`${creativity}%`}
                  />
                  <h2 className="text-xl">Creativity</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Some of my Project & Educations */}
        <div className="flex px-20 gap-8 pb-10 flex-col lg:flex-row">
          <div class="card flex-1 flex justify-center items-center bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class=" text-xl uppercase font-bold">Some Of My Project</h2>
              <h3 className="text-sm font-semibold">Project Name-1</h3>
              <p className="font-semibold">
                <small>Name: Windsor Car Warehouse</small>
              </p>
              <p className="font-semibold">
                <small>
                  {" "}
                  Live Site:{" "}
                  <a
                    className="text-secondary"
                    target="_blank"
                    href="https://windsor-car-warehouse.web.app/"
                  >
                    https://windsor-car-warehouse.web.app/
                  </a>
                </small>
              </p>
              <p className="font-semibold">
                <small>
                  {" "}
                  Code Link:{" "}
                  <a
                    className="text-secondary"
                    target="_blank"
                    href="https://github.com/developer-mohammad-faisal/Windsor-Car-Warehouse-Client/"
                  >
                    https://github.com/developer-mohammad-faisal/Windsor-Car-Warehouse-Client
                  </a>
                </small>
              </p>

              <h3 className="text-sm font-semibold">Project Name-2</h3>
              <p className="font-semibold">
                <small>Name: Dr. William F Turner</small>
              </p>
              <p className="font-semibold">
                <small>
                  {" "}
                  Live Site:{" "}
                  <a
                    className="text-secondary"
                    target="_blank"
                    href="https://dr-william-f-turner.web.app/"
                  >
                    https://dr-william-f-turner.web.app/
                  </a>
                </small>
              </p>
              <p className="font-semibold">
                <small>
                  {" "}
                  Code Link:{" "}
                  <a
                    className="text-secondary"
                    target="_blank"
                    href="https://github.com/developer-mohammad-faisal/Dr.-William-F-Turner/"
                  >
                    https://github.com/developer-mohammad-faisal/Dr.-William-F-Turner
                  </a>
                </small>
              </p>

              <h3 className="text-sm font-semibold">Project Name-3</h3>
              <p className="font-semibold">
                <small>Name: Book Reviews</small>
              </p>
              <p className="font-semibold">
                <small>
                  {" "}
                  Live Site:{" "}
                  <a
                    className="text-secondary"
                    target="_blank"
                    href="https://book-bazaar.netlify.app/home"
                  >
                    https://book-bazaar.netlify.app/home
                  </a>
                </small>
              </p>
              <p className="font-semibold">
                <small>
                  {" "}
                  Code Link:{" "}
                  <a
                    className="text-secondary"
                    target="_blank"
                    href="https://github.com/developer-mohammad-faisal/Book-Review-/"
                  >
                    https://github.com/developer-mohammad-faisal/Book-Review-
                  </a>
                </small>
              </p>
            </div>
          </div>

          <div class="card flex-1 flex justify-center items-center bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-xl uppercase font-bold">Educations</h2>
              <div className="shadow-md py-4 px-3 rounded-md">
                <h1 className="font-semibold">JSC 2018</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam possimus cum, reiciendis, nesciunt rem ut ipsum
                  cupiditate. Et officiis libero quos veniam maiores architecto!
                </p>
              </div>
              <div className="shadow-md py-4 px-3 rounded-md">
                <h1 className="font-semibold">SSC 2020</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam possimus cum, reiciendis, nesciunt rem ut ipsum
                  cupiditate. Et officiis libero quos veniam maiores architecto!
                </p>
              </div>
              <div className="shadow-md py-4 px-3 rounded-md">
                <h1 className="font-semibold">HSC 2022</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam possimus cum, reiciendis, nesciunt rem ut ipsum
                  cupiditate. Et officiis libero quos veniam maiores architecto!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact me */}
        <div class=" flex items-center px-16 py-28 flex-col lg:flex-row">
          <div class=" flex-1 ">
            <img className="rounded-md" src={contactMe} alt="" />
          </div>
          <div>
            <h1 class="text-5xl text-primary mt-10 lg:mt-0 font-bold">Mohammad Faisal</h1>
            <h2 class="pb-3 font-bold text-2xl">Front End Developer</h2>
            <p className="text-sm font-bold">
              {" "}
              <FontAwesomeIcon
                className="text-primary"
                icon={faEnvelope}
              />{" "}
              <span className="ml-1">Gmail:</span>{" "}
              <span className=" font-semibold">
                {" "}
                mohammadfaisalwebdeveloper@gmail.com
              </span>{" "}
            </p>
            <p className="text-sm font-bold">
              {" "}
              <FontAwesomeIcon className="text-primary" icon={faPhone} />{" "}
              <span className="ml-1"> Phone: </span>{" "}
              <span className="font-semibold"> +8801619816171</span>{" "}
            </p>
            <p className="text-sm font-bold">
              {" "}
              <FontAwesomeIcon className="text-primary" icon={faLocationDot} />
              <span className="ml-3">Location: </span>{" "}
              <span className="font-semibold">
                {" "}
                Bangladesh, Chittagong, Bakalia
              </span>{" "}
            </p>
            <p className="flex pt-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current mx-2"
                viewBox="0 0 512 512"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current mx-2"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current mx-2"
                viewBox="0 0 496 512 "
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current mx-2"
                viewBox="0 0 496 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current mx-2"
                viewBox="0 0 496 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
